#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8000}"
SERVICE_ID="${SERVICE_ID:-22222222-2222-2222-2222-222222222222}"
FROM_DATE="${FROM_DATE:-$(date +%F)}"
WINDOW_DAYS="${WINDOW_DAYS:-7}"
IDEMP_KEY="idem-$(date +%s)"

need() { command -v "$1" >/dev/null 2>&1 || { echo "Missing $1"; exit 1; }; }
need curl; need jq; need psql

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  BOOKING – IDEMPOTENCY & CONFLICT TEST (no payments)       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo "Target: $BASE_URL"
echo "Service: $SERVICE_ID  Range: $FROM_DATE +${WINDOW_DAYS}d"
echo

echo "Pre-clean: deleting future bookings (service scope)…"
psql -d booking_system -qtAc "
DELETE FROM bookings
WHERE service_id = '$SERVICE_ID'
  AND starts_at >= '$FROM_DATE'::date
  AND starts_at <  ('$FROM_DATE'::date + interval '$WINDOW_DAYS days');" >/dev/null || true
echo "…done."
echo

echo "Health check:"
curl -s "$BASE_URL/health" | jq .
echo

echo "Fetching availability…"
SLOTS_JSON="$(curl -s "$BASE_URL/public/v1/services/$SERVICE_ID/availability?from_date=$FROM_DATE&days=$WINDOW_DAYS")"
TOTAL="$(echo "$SLOTS_JSON" | jq '.available_slots | length')"
[[ "$TOTAL" -gt 0 ]] || { echo "No available slots."; exit 1; }
SLOT="$(echo "$SLOTS_JSON" | jq -r '.available_slots[0]')"
echo "Chosen SLOT: $SLOT"
echo

post_json () {
  local path="$1" idem="$2" json="$3"
  local tmp="/tmp/post_body_$$_$RANDOM"
  local code
  code="$(curl -s -o "$tmp" -w "%{http_code}" -X POST "$BASE_URL$path" \
          -H 'Content-Type: application/json' \
          -H "Idempotency-Key: $idem" \
          -d "$json")"
  printf "%s|" "$code"
  cat "$tmp"
  rm -f "$tmp"
}

# Test 1: create (200)
echo "━━━━━━━━ Test 1: Create booking (200) ━━━━━━━━"
REQ1="$(jq -n --arg sid "$SERVICE_ID" --arg start "$SLOT" \
              --arg name "Suite Test" --arg email "suite@example.com" \
        '{service_id:$sid, starts_at:$start, customer_name:$name, customer_email:$email}')"
RES1="$(post_json "/public/v1/bookings" "$IDEMP_KEY" "$REQ1")"
CODE1="${RES1%%|*}"; BODY1="${RES1#*|}"
echo "HTTP $CODE1"
echo "$BODY1" | jq .
BID1="$(echo "$BODY1" | jq -r '.booking_id // empty')"
[[ "$CODE1" == "200" && -n "$BID1" ]] || { echo "❌ Create failed"; exit 1; }
echo "✅ Created: $BID1"
echo

# Test 2: same key + same payload (200 same id)
echo "━━━━━━━━ Test 2: Same key + same payload (200 same id) ━━━━━━━━"
RES2="$(post_json "/public/v1/bookings" "$IDEMP_KEY" "$REQ1")"
CODE2="${RES2%%|*}"; BODY2="${RES2#*|}"
echo "HTTP $CODE2"
echo "$BODY2" | jq .
BID2="$(echo "$BODY2" | jq -r '.booking_id // empty')"
[[ "$CODE2" == "200" && "$BID2" == "$BID1" ]] || { echo "❌ Idempotency failed"; exit 1; }
echo "✅ Idempotency OK (same booking_id)"
echo

# Test 3: same key + different payload (409)
echo "━━━━━━━━ Test 3: Same key + different payload (409) ━━━━━━━━"
REQ_DIFF="$(jq -n --arg sid "$SERVICE_ID" --arg start "$SLOT" \
                --arg name "Different Name" --arg email "diff@example.com" \
          '{service_id:$sid, starts_at:$start, customer_name:$name, customer_email:$email}')"
RES3="$(post_json "/public/v1/bookings" "$IDEMP_KEY" "$REQ_DIFF")"
CODE3="${RES3%%|*}"; BODY3="${RES3#*|}"
echo "HTTP $CODE3"
echo "$BODY3" | jq .
[[ "$CODE3" == "409" ]] || { echo "❌ Expected 409 for mismatched payload"; exit 1; }
echo "✅ Mismatched payload correctly rejected"
echo

# Test 4: different key, same slot (409)
echo "━━━━━━━━ Test 4: Different key + same slot (409) ━━━━━━━━"
RES4="$(post_json "/public/v1/bookings" "${IDEMP_KEY}-other" "$REQ1")"
CODE4="${RES4%%|*}"; BODY4="${RES4#*|}"
echo "HTTP $CODE4"
echo "$BODY4" | jq .
[[ "$CODE4" == "409" ]] || { echo "❌ Expected 409 (slot already taken)"; exit 1; }
echo "✅ Slot conflict enforced"
echo

echo "🎉 ALL TESTS PASSED"
