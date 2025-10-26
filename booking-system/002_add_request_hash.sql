BEGIN;

-- Add request_hash to track payload for idempotency
ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS request_hash text;

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_bookings_idempotency_hash 
ON bookings(idempotency_key, request_hash) 
WHERE idempotency_key IS NOT NULL;

COMMIT;
