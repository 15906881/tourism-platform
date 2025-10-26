-- Create audit log table
CREATE TABLE IF NOT EXISTS booking_audit (
  id BIGSERIAL PRIMARY KEY,
  booking_id TEXT NOT NULL,
  action TEXT NOT NULL,            -- CREATED|CANCELLED|RESCHEDULED
  actor TEXT NOT NULL,             -- 'public' or user id in future
  details JSONB NOT NULL DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_booking_audit_booking ON booking_audit(booking_id);
CREATE INDEX IF NOT EXISTS idx_booking_audit_action ON booking_audit(action);
CREATE INDEX IF NOT EXISTS idx_booking_audit_created ON booking_audit(created_at);

-- Add reminder tracking to bookings (if not exists)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'bookings' AND column_name = 'reminder_sent_at') THEN
        ALTER TABLE bookings ADD COLUMN reminder_sent_at TIMESTAMPTZ;
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_bookings_reminder ON bookings (starts_at) 
WHERE status = 'CONFIRMED' AND reminder_sent_at IS NULL;

-- Add tenant safety index
CREATE INDEX IF NOT EXISTS idx_bookings_tenant_time ON bookings(tenant_id, starts_at);
