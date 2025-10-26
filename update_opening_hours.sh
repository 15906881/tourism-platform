#!/bin/bash
echo '=== Updating Service Opening Hours to use mon/tue/wed format ==='

SERVICE_ID=$(PAGER='' psql -d booking_system -t -A -q -c 'SELECT id FROM services WHERE active = true LIMIT 1;' 2>/dev/null | head -1)
echo "Updating service: $SERVICE_ID"

psql -d booking_system -c "
UPDATE services 
SET opening_hours = '{
    \"mon\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
    \"tue\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
    \"wed\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
    \"thu\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
    \"fri\": [{\"start\":\"09:00\",\"end\":\"12:00\"}, {\"start\":\"13:00\",\"end\":\"17:00\"}],
    \"sat\": [],
    \"sun\": []
}'::jsonb
WHERE id = '$SERVICE_ID';
"

echo '✅ Opening hours updated!'
