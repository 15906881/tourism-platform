#!/bin/bash
set -u

BASE_URL="${BASE_URL:-http://localhost:8002}"
SERVICE_ID="${SERVICE_ID:-22222222-2222-2222-2222-222222222222}"
HMAC_HEADER="$1"

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  ENHANCED IDEMPOTENCY TEST (with HMAC bypass)             ║"  
echo "╚════════════════════════════════════════════════════════════╝"
echo "Target: $BASE_URL"
echo "HMAC: ${HMAC_HEADER:0:20}..."

# Health check
echo -n "Health check: "
curl -s "$BASE_URL/health" | jq -r '.status'

# Get availability
SLOT=$(curl -s "$BASE_URL/public/v1/services/$SERVICE_ID/availability?from_date=2025-11-01&days=3" | jq -r '.available_slots[0]')
echo "Using slot: $SLOT"

# Test 1: Create booking with HMAC bypass
echo "Test 1: Create booking with HMAC bypass"
IDEMP_KEY="enhanced-test-$(date +%s)"
RESP1=$(curl -s -X POST "$BASE_URL/public/v1/bookings" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: $IDEMP_KEY" \
  -H "X-RateLimit-Bypass: $HMAC_HEADER" \
  -d "{\"service_id\":\"$SERVICE_ID\",\"starts_at\":\"$SLOT\",\"customer_name\":\"Enhanced Test\",\"customer_email\":\"enhanced@test.com\"}")

BOOKING_ID=$(echo "$RESP1" | jq -r '.booking_id')
echo "Created: $BOOKING_ID"

# Test 2: Same request returns same booking (persistent idempotency)
echo "Test 2: Persistent idempotency check"
RESP2=$(curl -s -X POST "$BASE_URL/public/v1/bookings" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: $IDEMP_KEY" \
  -H "X-RateLimit-Bypass: $HMAC_HEADER" \
  -d "{\"service_id\":\"$SERVICE_ID\",\"starts_at\":\"$SLOT\",\"customer_name\":\"Enhanced Test\",\"customer_email\":\"enhanced@test.com\"}")

BOOKING_ID2=$(echo "$RESP2" | jq -r '.booking_id')
if [ "$BOOKING_ID" = "$BOOKING_ID2" ]; then
  echo "✅ Persistent idempotency working"
else
  echo "❌ Persistent idempotency failed"
fi

# Test 3: Check idempotency store
echo "Test 3: Idempotency store verification"
STORED=$(psql -d booking_system -tA -c "SELECT COUNT(*) FROM idempotency_store WHERE idempotency_key = '$IDEMP_KEY' AND booking_id = '$BOOKING_ID'")
if [ "$STORED" -eq 1 ]; then
  echo "✅ Idempotency stored in database"
else
  echo "❌ Idempotency not stored in database"
fi

echo "🎉 Enhanced tests completed"
