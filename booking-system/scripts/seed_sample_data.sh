#!/bin/bash
set -e

echo "=== Seeding Sample Data ==="

psql $DATABASE_URL << 'SQL'
-- Insert sample tenant
INSERT INTO tenants (id, name, timezone) VALUES 
('11111111-1111-1111-1111-111111111111', 'Demo Spa', 'America/New_York')
ON CONFLICT (id) DO NOTHING;

-- Insert sample service  
INSERT INTO services (id, tenant_id, name, duration_mins, capacity, opening_hours) VALUES
('22222222-2222-2222-2222-222222222222', 
 '11111111-1111-1111-1111-111111111111',
 'Massage Therapy', 60, 1, 
 '{"monday": [{"start": "09:00", "end": "17:00"}],
   "tuesday": [{"start": "09:00", "end": "17:00"}],
   "wednesday": [{"start": "09:00", "end": "17:00"}],
   "thursday": [{"start": "09:00", "end": "17:00"}], 
   "friday": [{"start": "09:00", "end": "17:00"}]}')
ON CONFLICT (id) DO NOTHING;

SELECT '✅ Sample data seeded' as status;
SQL
