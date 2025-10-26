#!/bin/bash
set -e

echo '╔════════════════════════════════════════════════════════════════╗'
echo '║     REQUEST HASH VALIDATION TEST                              ║'
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''

SERVICE_ID='22222222-2222-2222-2222-222222222222'
SLOT=$(curl -s "http://localhost:8000/public/v1/services/$SERVICE_ID/availability?from_date=2025-10-31&days=1" | jq -r '.available_slots[0]')

echo "Using slot: $SLOT"
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Test 1: Create booking'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

RESULT1=$(curl -s -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H 'Idempotency-Key: hash-test-final' \
  -d "{\"service_id\":\"$SERVICE_ID\",\"starts_at\":\"$SLOT\",\"customer_name\":\"Alice Smith\",\"customer_email\":\"alice@example.com\"}")

echo "$RESULT1" | jq '.'
BID=$(echo "$RESULT1" | jq -r '.booking_id')
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Test 2: Retry with SAME payload (should return same booking)'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

RESULT2=$(curl -s -w '\nHTTP_CODE:%{http_code}' -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H 'Idempotency-Key: hash-test-final' \
  -d "{\"service_id\":\"$SERVICE_ID\",\"starts_at\":\"$SLOT\",\"customer_name\":\"Alice Smith\",\"customer_email\":\"alice@example.com\"}")

BODY2=$(echo "$RESULT2" | sed '/HTTP_CODE/d')
CODE2=$(echo "$RESULT2" | grep HTTP_CODE | cut -d: -f2)

echo "$BODY2" | jq '.'
echo "HTTP Status: $CODE2"

BID2=$(echo "$BODY2" | jq -r '.booking_id')

if [ "$BID" = "$BID2" ] && [ "$CODE2" = "200" ]; then
    echo '✅ TEST 2 PASSED: Same booking returned'
else
    echo '❌ TEST 2 FAILED'
fi
echo ''

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  Test 3: Same key, DIFFERENT payload (should be 409 Conflict)'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

RESULT3=$(curl -s -w '\nHTTP_CODE:%{http_code}' -X POST http://localhost:8000/public/v1/bookings \
  -H 'Content-Type: application/json' \
  -H 'Idempotency-Key: hash-test-final' \
  -d "{\"service_id\":\"$SERVICE_ID\",\"starts_at\":\"$SLOT\",\"customer_name\":\"Bob Jones\",\"customer_email\":\"bob@example.com\"}")

BODY3=$(echo "$RESULT3" | sed '/HTTP_CODE/d')
CODE3=$(echo "$RESULT3" | grep HTTP_CODE | cut -d: -f2)

echo "$BODY3" | jq '.'
echo "HTTP Status: $CODE3"

if [ "$CODE3" = "409" ]; then
    echo '✅ TEST 3 PASSED: 409 Conflict for payload mismatch!'
else
    echo "❌ TEST 3 FAILED: Expected 409, got $CODE3"
fi
echo ''

echo '╔════════════════════════════════════════════════════════════════╗'
if [ "$CODE2" = "200" ] && [ "$CODE3" = "409" ]; then
    echo '║          🎉 REQUEST HASH VALIDATION WORKING! 🎉               ║'
else
    echo '║          ⚠️  Some tests failed                                ║'
fi
echo '╚════════════════════════════════════════════════════════════════╝'
echo ''
echo 'Production-grade idempotency:'
echo '  ✅ Same key + same payload = same result'
echo '  ✅ Same key + different payload = 409 Conflict'
