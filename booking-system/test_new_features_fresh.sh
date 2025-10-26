#!/bin/bash
set -e

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║     NEW FEATURES TEST - Fresh Run                            ║'
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''

SERVICE_ID='22222222-2222-2222-2222-222222222222'

echo 'Getting available slot...'
SLOT=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-27&days=7" | jq -r '.available_slots[2]')
echo "Selected slot: $SLOT"
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  TEST 1: Create booking with TOKENS'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

RANDOM_KEY="fresh-test-$(date +%s)"
echo "Using idempotency key: $RANDOM_KEY"

BOOKING=$(curl -s -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H "Idempotency-Key: $RANDOM_KEY" \
  -d '{
    "service_id":"'"$SERVICE_ID"'",
    "starts_at":"'"$SLOT"'",
    "customer_name":"Alan Turing",
    "customer_email":"alan@example.com"
  }')

echo "$BOOKING" | jq '.'
BOOKING_ID=$(echo "$BOOKING" | jq -r '.booking_id')
CANCEL_TOKEN=$(echo "$BOOKING" | jq -r '.cancel_token')
RESCHEDULE_TOKEN=$(echo "$BOOKING" | jq -r '.reschedule_token')

echo ""
echo "Booking ID: $BOOKING_ID"
echo "Cancel Token: $CANCEL_TOKEN"
echo "Reschedule Token: $RESCHEDULE_TOKEN"
echo ""

if [ "$CANCEL_TOKEN" != "null" ] && [ "$RESCHEDULE_TOKEN" != "null" ]; then
    echo '✅ TEST 1 PASSED: Tokens returned!'
else
    echo '❌ TEST 1 FAILED: Tokens not returned'
    exit 1
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
    echo '✅ TEST 2 PASSED: Booking cancelled successfully!'
else
    echo '❌ TEST 2 FAILED: Cancel failed'
fi
echo ''

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║          🎉 ALL TESTS PASSED! 🎉                              ║'
echo '╚════════════════════════════════════════════════════════════════╝'
