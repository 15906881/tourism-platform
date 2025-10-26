-- Add reminder tracking to bookings
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS reminder_sent_at TIMESTAMPTZ;
CREATE INDEX IF NOT EXISTS idx_bookings_reminder ON bookings (starts_at) WHERE status = 'CONFIRMED' AND reminder_sent_at IS NULL;

-- Create audit log table
CREATE TABLE IF NOT EXISTS booking_audit (
  id BIGSERIAL PRIMARY KEY,
  booking_id UUID NOT NULL,
  action TEXT NOT NULL,            -- CREATED|CANCELLED|RESCHEDULED
  actor TEXT NOT NULL,             -- 'public' or user id in future
  details JSONB NOT NULL DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_booking_audit_booking ON booking_audit(booking_id);

-- Add tenant safety index
CREATE INDEX IF NOT EXISTS idx_bookings_tenant_time ON bookings(tenant_id, starts_at);
