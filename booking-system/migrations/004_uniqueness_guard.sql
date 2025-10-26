-- Add unique constraint to prevent double-booking at DB level
CREATE UNIQUE INDEX IF NOT EXISTS ux_service_slot_active 
ON bookings(service_id, starts_at) 
WHERE status IN ('PENDING','CONFIRMED');

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_service_time_status 
ON bookings(service_id, starts_at, status);

-- Verify the constraint
SELECT 
    indexname, 
    indexdef 
FROM pg_indexes 
WHERE tablename = 'bookings' 
AND indexname LIKE 'ux_service_slot%';
