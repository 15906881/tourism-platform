#!/bin/bash
set -e

echo "🔧 Implementing UPSERT-based Idempotency..."

# Step 1: Database migration
echo "Step 1: Adding UNIQUE constraint on idempotency_key..."
psql -d booking_system << 'SQL'
BEGIN;
DROP INDEX IF EXISTS ux_bookings_idempotency_key;
DROP INDEX IF EXISTS idx_bookings_idempotency_hash;
ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_idempotency_key_uniq;
ALTER TABLE bookings ADD CONSTRAINT bookings_idempotency_key_uniq UNIQUE (idempotency_key);
COMMIT;
SQL

echo "✅ Database constraint added!"
echo ""

# Step 2: Replace create_booking function
echo "Step 2: Updating create_booking function..."
python3 << 'PYTHON'
with open('src/api/main.py', 'r') as f:
    content = f.read()

# Ensure Request is imported
if 'Request' not in content.split('from fastapi import')[1].split('\n')[0]:
    content = content.replace(
        'from fastapi import FastAPI, HTTPException, Header',
        'from fastapi import FastAPI, HTTPException, Header, Request'
    )

# Find and replace create_booking
start_marker = "@app.post('/public/v1/bookings')"
start_idx = content.find(start_marker)

# Find next function or end
end_markers = ["\n@app.post('/public/v1/bookings/", "\n@app.get(", "\nif __name__"]
end_idx = len(content)
for marker in end_markers:
    idx = content.find(marker, start_idx + 1)
    if idx != -1 and idx < end_idx:
        end_idx = idx

new_function = '''@app.post('/public/v1/bookings')
async def create_booking(booking: CreateBookingRequest, request: Request):
    """Create booking with UPSERT-based idempotency"""
    async with pool.acquire() as conn:
        # 1) Load service + tenant
        svc = await conn.fetchrow("""
            SELECT s.id, s.tenant_id, s.duration_mins, s.capacity, s.active,
                   COALESCE(s.lead_time_mins,0) AS lead_time_mins,
                   t.timezone
            FROM services s
            JOIN tenants t ON t.id = s.tenant_id
            WHERE s.id = $1 AND s.active = true
        """, booking.service_id)
        
        if not svc:
            raise HTTPException(status_code=404, detail="Service not found or inactive")

        tz = pytz.timezone(svc['timezone'] or 'America/New_York')

        # 2) Parse time and convert to UTC
        try:
            starts_local = datetime.fromisoformat(booking.starts_at.replace('Z', '+00:00'))
            if starts_local.tzinfo is None:
                starts_local = tz.localize(starts_local)
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid starts_at format")

        duration_mins = int(svc['duration_mins'])
        starts_at_utc = starts_local.astimezone(pytz.UTC)
        ends_at_utc = (starts_local + timedelta(minutes=duration_mins)).astimezone(pytz.UTC)

        # 3) Lead time check
        lead = timedelta(minutes=int(svc['lead_time_mins']))
        now_utc = datetime.now(pytz.UTC)
        if starts_at_utc < now_utc + lead:
            raise HTTPException(400, detail='Does not meet lead time requirement')

        # 4) Capacity check
        concurrent = await conn.fetchval("""
            SELECT COUNT(*) FROM bookings
            WHERE service_id = $1
              AND status NOT IN ('CANCELLED','NOSHOW')
              AND starts_at < $3
              AND ends_at > $2
        """, booking.service_id, starts_at_utc, ends_at_utc)

        if concurrent >= int(svc['capacity']):
            raise HTTPException(status_code=409, detail="Slot not available")

        # 5) Idempotency with UPSERT
        idem_key = request.headers.get("Idempotency-Key")
        payload_for_hash = {
            "service_id": booking.service_id,
            "starts_at": booking.starts_at,
            "customer_email": booking.customer_email,
            "customer_name": booking.customer_name,
        }
        request_hash = hashlib.sha256(
            json.dumps(payload_for_hash, separators=(",", ":"), sort_keys=True).encode()
        ).hexdigest()

        cancel_token = str(uuid4())
        resched_token = str(uuid4())

        async with conn.transaction():
            row = await conn.fetchrow("""
                INSERT INTO bookings
                    (tenant_id, service_id, customer_email, customer_name,
                     starts_at, ends_at, status, cancel_token, reschedule_token,
                     idempotency_key, request_hash)
                VALUES
                    ($1, $2, $3, $4, $5, $6, 'CONFIRMED', $7, $8, $9, $10)
                ON CONFLICT (idempotency_key)
                DO UPDATE SET idempotency_key = EXCLUDED.idempotency_key
                RETURNING id, status, cancel_token, reschedule_token, request_hash
            """,
                svc['tenant_id'], svc['id'], booking.customer_email, booking.customer_name,
                starts_at_utc, ends_at_utc, cancel_token, resched_token,
                idem_key, request_hash
            )

            # Detect payload drift
            if row['request_hash'] != request_hash:
                raise HTTPException(
                    status_code=409,
                    detail="Idempotency-Key reused with different payload"
                )

            return {
                "booking_id": str(row["id"]),
                "status": row["status"],
                "cancel_token": row["cancel_token"],
                "reschedule_token": row["reschedule_token"],
            }

'''

# Replace
before = content[:start_idx]
after = content[end_idx:]
new_content = before + new_function + after

with open('src/api/main.py', 'w') as f:
    f.write(new_content)

print("✅ create_booking function updated!")
PYTHON

echo ""
echo "✅ Implementation complete!"
echo "Now restart Terminal 1 (Ctrl+C, then ./run.sh) and test!"
