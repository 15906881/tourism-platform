#!/bin/bash
echo "🔧 Replacing create_booking function with clean implementation..."

# Backup first
cp src/api/main.py src/api/main.py.backup_before_clean

# Create Python script to do the replacement
python3 << 'PYTHON'
with open('src/api/main.py', 'r') as f:
    content = f.read()

# Find the start of create_booking
start_marker = "@app.post('/public/v1/bookings')\nasync def create_booking("
start_idx = content.find(start_marker)

if start_idx == -1:
    print("❌ Could not find create_booking function")
    exit(1)

# Find the end (next @app decorator or EOF)
# Look for the next function definition at column 0
end_marker_options = [
    "\n@app.post('/public/v1/bookings/",
    "\n@app.get(",
    "\nif __name__ == '__main__':"
]

end_idx = -1
for marker in end_marker_options:
    idx = content.find(marker, start_idx + len(start_marker))
    if idx != -1:
        if end_idx == -1 or idx < end_idx:
            end_idx = idx

if end_idx == -1:
    print("❌ Could not find end of create_booking function")
    exit(1)

# New clean implementation
new_function = '''@app.post('/public/v1/bookings')
async def create_booking(booking: CreateBookingRequest, request: Request):
    """Create a booking with idempotency, capacity checks, and token generation"""
    # 1) Load service + tenant
    async with pool.acquire() as conn:
        svc = await conn.fetchrow("""
            SELECT s.*, t.id AS tenant_id, t.timezone
            FROM services s
            JOIN tenants t ON t.id = s.tenant_id
            WHERE s.id = $1 AND s.active = true
        """, booking.service_id)
        if not svc:
            raise HTTPException(status_code=404, detail="Service not found or inactive")

        tz = pytz.timezone(svc['timezone'] or 'America/New_York')

        # 2) Parse start; compute end; convert to UTC
        try:
            starts_local = datetime.fromisoformat(booking.starts_at.replace('Z', '+00:00'))
            if starts_local.tzinfo is None:
                starts_local = tz.localize(starts_local)
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid starts_at format (must be ISO 8601)")

        duration_mins = int(svc['duration_mins'])
        ends_local = starts_local + timedelta(minutes=duration_mins)

        starts_at_utc = starts_local.astimezone(pytz.UTC)
        ends_at_utc   = ends_local.astimezone(pytz.UTC)

        # 3) Capacity / overlap check
        concurrent = await conn.fetchval("""
            SELECT COUNT(*) FROM bookings
            WHERE service_id = $1
              AND status NOT IN ('CANCELLED','NOSHOW')
              AND starts_at < $3
              AND ends_at   > $2
        """, booking.service_id, starts_at_utc, ends_at_utc)

        if concurrent >= int(svc['capacity']):
            raise HTTPException(status_code=409, detail="Time slot is no longer available")

        # 4) Idempotency
        idem_key = request.headers.get("Idempotency-Key")
        payload_for_hash = {
            "service_id": booking.service_id,
            "starts_at":  booking.starts_at,
            "customer_name":  booking.customer_name,
            "customer_email": booking.customer_email,
        }
        request_hash = hashlib.sha256(
            json.dumps(payload_for_hash, sort_keys=True).encode("utf-8")
        ).hexdigest()

        cancel_token = str(uuid4())
        reschedule_token = str(uuid4())

        async with conn.transaction():
            if idem_key:
                # Try insert; ON CONFLICT returns None if key exists
                row = await conn.fetchrow("""
                    INSERT INTO bookings
                        (tenant_id, service_id, customer_email, customer_name,
                         starts_at, ends_at, status, cancel_token, reschedule_token,
                         idempotency_key, request_hash)
                    VALUES
                        ($1, $2, $3, $4, $5, $6, 'CONFIRMED', $7, $8, $9, $10)
                    ON CONFLICT (idempotency_key) DO NOTHING
                    RETURNING id, status, cancel_token, reschedule_token, request_hash
                """,
                    svc['tenant_id'], booking.service_id, booking.customer_email, booking.customer_name,
                    starts_at_utc, ends_at_utc, cancel_token, reschedule_token,
                    idem_key, request_hash
                )

                if row is None:
                    # Key already used; fetch and validate
                    row = await conn.fetchrow("""
                        SELECT id, status, cancel_token, reschedule_token, request_hash
                        FROM bookings
                        WHERE idempotency_key = $1
                        LIMIT 1
                    """, idem_key)

                    if not row:
                        raise HTTPException(status_code=409, detail="Idempotency conflict")

                    if row['request_hash'] != request_hash:
                        raise HTTPException(
                            status_code=409,
                            detail="Idempotency-Key reused with different payload"
                        )

                    # Perfect replay
                    return {
                        "booking_id": str(row["id"]),
                        "status": row["status"],
                        "cancel_token": row["cancel_token"],
                        "reschedule_token": row["reschedule_token"],
                    }
                else:
                    # Fresh insert via idempotency path
                    return {
                        "booking_id": str(row["id"]),
                        "status": row["status"],
                        "cancel_token": row["cancel_token"],
                        "reschedule_token": row["reschedule_token"],
                    }
            else:
                # No idempotency key: normal insert
                row = await conn.fetchrow("""
                    INSERT INTO bookings
                        (tenant_id, service_id, customer_email, customer_name,
                         starts_at, ends_at, status, cancel_token, reschedule_token)
                    VALUES
                        ($1, $2, $3, $4, $5, $6, 'CONFIRMED', $7, $8)
                    RETURNING id, status, cancel_token, reschedule_token
                """,
                    svc['tenant_id'], booking.service_id, booking.customer_email, booking.customer_name,
                    starts_at_utc, ends_at_utc, cancel_token, reschedule_token
                )
                return {
                    "booking_id": str(row["id"]),
                    "status": row["status"],
                    "cancel_token": row["cancel_token"],
                    "reschedule_token": row["reschedule_token"],
                }

'''

# Replace the old function with new
before = content[:start_idx]
after = content[end_idx:]
new_content = before + new_function + after

# Ensure Request is imported
if 'from fastapi import' in new_content and 'Request' not in new_content.split('from fastapi import')[1].split('\n')[0]:
    new_content = new_content.replace(
        'from fastapi import FastAPI, HTTPException, Header',
        'from fastapi import FastAPI, HTTPException, Header, Request'
    )

with open('src/api/main.py', 'w') as f:
    f.write(new_content)

print("✅ Replaced create_booking with clean implementation!")
PYTHON

echo ""
echo "✅ Function replaced! Now restart Terminal 1 (Ctrl+C, then ./run.sh)"
