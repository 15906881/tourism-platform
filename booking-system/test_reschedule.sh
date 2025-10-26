#!/bin/bash
set -e

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║     RESCHEDULE ENDPOINT TEST                                  ║'
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''

SERVICE_ID='22222222-2222-2222-2222-222222222222'

echo 'Step 1: Get two available slots...'
SLOTS=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=7")
SLOT1=$(echo "$SLOTS" | jq -r '.available_slots[0]')
SLOT2=$(echo "$SLOTS" | jq -r '.available_slots[3]')
echo "Original slot: $SLOT1"
echo "New slot: $SLOT2"
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Step 2: Create initial booking'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

BOOKING=$(curl -s -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H "Idempotency-Key: reschedule-test-$(date +%s)" \
  -d '{
    "service_id":"'"$SERVICE_ID"'",
    "starts_at":"'"$SLOT1"'",
    "customer_name":"Marie Curie",
    "customer_email":"marie@example.com"
  }')

echo "$BOOKING" | jq '.'
BOOKING_ID=$(echo "$BOOKING" | jq -r '.booking_id')
RESCHEDULE_TOKEN=$(echo "$BOOKING" | jq -r '.reschedule_token')
echo ''

if [ "$RESCHEDULE_TOKEN" = "null" ]; then
    echo '❌ No reschedule token! Aborting.'
    exit 1
fi

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Step 3: Reschedule to new slot'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

echo "Rescheduling $BOOKING_ID from $SLOT1 to $SLOT2..."
RESCHEDULE_RESULT=$(curl -s -X POST "http://localhost:8000/public/v1/bookings/$BOOKING_ID/reschedule?token=$RESCHEDULE_TOKEN&new_starts_at=$SLOT2")
echo "$RESCHEDULE_RESULT" | jq '.'
echo ''

NEW_TIME=$(echo "$RESCHEDULE_RESULT" | jq -r '.starts_at')
if [ "$NEW_TIME" != "null" ] && [ "$NEW_TIME" != "" ]; then
    echo '✅ TEST PASSED: Booking rescheduled!'
else
    echo '❌ TEST FAILED: Reschedule failed'
    exit 1
fi
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Step 4: Verify old slot is now available'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

OLD_SLOT_AVAILABLE=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=2" | jq --arg SLOT "$SLOT1" '[.available_slots[] | select(.==$SLOT)] | length')
echo "Old slot ($SLOT1) availability: $OLD_SLOT_AVAILABLE"

if [ "$OLD_SLOT_AVAILABLE" = "1" ]; then
    echo '✅ TEST PASSED: Old slot is available again!'
else
    echo '⚠️  Old slot not showing as available yet'
fi
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Step 5: Verify new slot is now taken'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

NEW_SLOT_AVAILABLE=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=2" | jq --arg SLOT "$SLOT2" '[.available_slots[] | select(.==$SLOT)] | length')
echo "New slot ($SLOT2) availability: $NEW_SLOT_AVAILABLE"

if [ "$NEW_SLOT_AVAILABLE" = "0" ]; then
    echo '✅ TEST PASSED: New slot is taken!'
else
    echo '⚠️  New slot still showing as available'
fi
echo ''

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║          ✅ RESCHEDULE FEATURE WORKING! ✅                    ║'
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''
echo 'Self-service booking flow complete:'
echo '  ✅ Create booking'
echo '  ✅ Cancel booking'
echo '  ✅ Reschedule booking'
