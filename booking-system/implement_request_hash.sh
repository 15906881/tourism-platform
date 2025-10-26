#!/bin/bash
echo "🔧 Implementing Request Hash Validation..."

# Step 1: Database migration
echo "Step 1: Adding request_hash column to database..."
psql -d booking_system << 'SQL'
BEGIN;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS request_hash text;
CREATE INDEX IF NOT EXISTS idx_bookings_idempotency_hash 
  ON bookings(idempotency_key, request_hash) 
  WHERE idempotency_key IS NOT NULL;
COMMIT;
SQL

# Step 2: Update main.py
echo "Step 2: Updating API code..."
python3 << 'PYTHON'
with open('src/api/main.py', 'r') as f:
    lines = f.readlines()

# Find where to insert hash function (after CreateBookingRequest class)
insert_index = None
for i, line in enumerate(lines):
    if 'class CreateBookingRequest' in line:
        # Find the end of the class (next @app or def at column 0)
        for j in range(i+1, len(lines)):
            if lines[j].startswith('@app') or (lines[j].startswith('def ') and not lines[j].startswith('    ')):
                insert_index = j
                break
        break

if insert_index:
    # Add hashlib import if not present
    import_added = False
    for i, line in enumerate(lines):
        if 'from uuid import uuid4' in line and 'hashlib' not in ''.join(lines):
            lines[i] = line.rstrip() + '\nimport hashlib\n'
            import_added = True
            break
    
    # Insert hash function
    hash_func = '''
def _hash_request(booking: CreateBookingRequest) -> str:
    """Create deterministic hash of booking request"""
    payload = {
        'service_id': booking.service_id,
        'starts_at': booking.starts_at,
        'customer_name': booking.customer_name,
        'customer_email': booking.customer_email,
        'customer_phone': booking.customer_phone
    }
    return hashlib.sha256(json.dumps(payload, sort_keys=True).encode()).hexdigest()

'''
    
    if '_hash_request' not in ''.join(lines):
        lines.insert(insert_index, hash_func)
    
    # Update idempotency check
    content = ''.join(lines)
    
    # Add request_hash computation and validation
    old_check = """existing = await conn.fetchrow(
                'SELECT id, status, cancel_token, reschedule_token FROM bookings WHERE idempotency_key = $1',
                idempotency_key
            )
            if existing:"""
    
    new_check = """# Compute request hash for payload validation
            request_hash = _hash_request(booking)
            
            existing = await conn.fetchrow(
                'SELECT id, status, cancel_token, reschedule_token, request_hash FROM bookings WHERE idempotency_key = $1',
                idempotency_key
            )
            if existing:
                # Verify payload hasn't changed
                if existing['request_hash'] and existing['request_hash'] != request_hash:
                    raise HTTPException(
                        status_code=409,
                        detail='Idempotency key reused with different request payload'
                    )"""
    
    content = content.replace(old_check, new_check)
    
    # Update INSERT to include request_hash
    content = content.replace(
        'idempotency_key\n                ) VALUES (',
        'idempotency_key, request_hash\n                ) VALUES ('
    )
    
    content = content.replace(
        'idempotency_key)',
        'idempotency_key, request_hash)',
        1  # Only first occurrence in INSERT
    )
    
    with open('src/api/main.py', 'w') as f:
        f.write(content)
    
    print("✅ Code updated successfully!")
else:
    print("❌ Could not find insertion point")
    exit(1)
PYTHON

echo ""
echo "✅ Implementation complete!"
echo "Now restart Terminal 1 (Ctrl+C then ./run.sh)"
