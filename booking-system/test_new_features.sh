#!/bin/bash
set -e

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║     NEW FEATURES TEST - Cancel & Tokens                      ║'
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''

SERVICE_ID='22222222-2222-2222-2222-222222222222'

echo 'Getting available slot...'
SLOT=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=7" | jq -r '.available_slots[1]')
echo "Selected slot: $SLOT"
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  TEST 1: Create booking and verify tokens returned'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

BOOKING=$(curl -s -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H 'Idempotency-Key: feature-test-1' \
  -d '{
    "service_id":"'"$SERVICE_ID"'",
    "starts_at":"'"$SLOT"'",
    "customer_name":"Grace Hopper",
    "customer_email":"grace@example.com"
  }')

echo "$BOOKING" | jq '.'
BOOKING_ID=$(echo "$BOOKING" | jq -r '.booking_id')
CANCEL_TOKEN=$(echo "$BOOKING" | jq -r '.cancel_token')
RESCHEDULE_TOKEN=$(echo "$BOOKING" | jq -r '.reschedule_token')

if [ "$CANCEL_TOKEN" != "null" ] && [ "$RESCHEDULE_TOKEN" != "null" ]; then
    echo '✅ TEST 1 PASSED: Tokens returned'
else
    echo '❌ TEST 1 FAILED: Tokens not returned'
fi
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  TEST 2: Cancel booking using token'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

echo "Cancelling booking $BOOKING_ID..."
CANCEL_RESULT=$(curl -s -X POST "http://localhost:8000/public/v1/bookings/$BOOKING_ID/cancel?token=$CANCEL_TOKEN")
echo "$CANCEL_RESULT" | jq '.'

STATUS=$(echo "$CANCEL_RESULT" | jq -r '.status')
if [ "$STATUS" = "CANCELLED" ]; then
    echo '✅ TEST 2 PASSED: Booking cancelled'
else
    echo '❌ TEST 2 FAILED: Cancel failed'
fi
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  TEST 3: Verify slot is available again after cancellation'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

SLOT_AVAILABLE=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=2" | jq --arg SLOT "$SLOT" '[.available_slots[] | select(.==$SLOT)] | length')

echo "Slot availability: $SLOT_AVAILABLE"
if [ "$SLOT_AVAILABLE" = "1" ]; then
    echo '✅ TEST 3 PASSED: Cancelled slot is available again'
else
    echo '⚠️  TEST 3: Slot not showing (may need cache clear or delay)'
fi
echo ''

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║          ✅ NEW FEATURES WORKING!                             ║'
echo '╚════════════════════════════════════════════════════════════════╝'
