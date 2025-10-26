#!/bin/bash
echo '=== Fixing Availability Endpoint ==='
echo ''

# 0) Get today's date
TODAY=$(date +%F)
echo "Today's date: $TODAY"
echo ''

# 1) Get the real service ID from database (properly cleaned, suppress psql messages)
echo '📋 Step 1: Getting real service ID...'
SERVICE_ID=$(PAGER='' psql -d booking_system -t -A -q -c 'SELECT id FROM services WHERE active = true LIMIT 1;' 2>/dev/null | head -1)
echo "Service ID: $SERVICE_ID"
echo ''

# 2) Check current service configuration
echo '📋 Step 2: Current service configuration...'
psql -d booking_system -c "
SELECT id, name, active, duration_mins, opening_hours
FROM services
WHERE id = '$SERVICE_ID';
"
echo ''

# 3) Update the service with proper opening hours
echo '📋 Step 3: Updating service with proper hours...'
psql -d booking_system -c "
UPDATE services 
SET 
    active = true,
    duration_mins = 60,
    opening_hours = '{
        \"monday\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
        \"tuesday\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
        \"wednesday\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
        \"thursday\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
        \"friday\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
        \"saturday\": [],
        \"sunday\": []
    }'::jsonb
WHERE id = '$SERVICE_ID'
RETURNING id, name, active;
"
echo ''

# 4) Check for any existing bookings
echo '📋 Step 4: Checking for existing bookings...'
psql -d booking_system -c "
SELECT starts_at, ends_at, status 
FROM bookings
WHERE service_id = '$SERVICE_ID' 
  AND date(starts_at) BETWEEN current_date AND current_date + 7
ORDER BY starts_at;
" || echo 'No bookings found (table might be empty)'
echo ''

# 5) Test the availability endpoint with correct parameters
echo '📋 Step 5: Testing availability endpoint...'
echo "URL: http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=$TODAY&days=7"
curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=$TODAY&days=7" | jq '.'
echo ''

echo '✅ Done! Check the output above for available slots.'
