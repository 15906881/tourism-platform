BEGIN;

-- Per-request idempotency
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS idempotency_key text;
CREATE UNIQUE INDEX IF NOT EXISTS ux_bookings_idempotency_key
  ON bookings (idempotency_key) WHERE idempotency_key IS NOT NULL;

-- Speed up overlap checks by time
CREATE INDEX IF NOT EXISTS idx_bookings_service_time
  ON bookings (service_id, starts_at, ends_at);

COMMIT;
