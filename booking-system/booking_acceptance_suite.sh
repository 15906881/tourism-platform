#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8000}"
SERVICE_ID="${SERVICE_ID:-22222222-2222-2222-2222-222222222222}"
RANGE_FROM="${RANGE_FROM:-2025-10-27}"
RANGE_DAYS="${RANGE_DAYS:-7}"

is_json(){ jq -e . >/dev/null 2>&1 <"$1"; }
curl_capture(){ # usage: curl_capture URL [curl args...]
  local url="$1"; shift
  local tmp; tmp="$(mktemp)"
  local code
  code="$(curl -sS -o "$tmp" -w '%{http_code}' "$url" "$@" || echo 000)"
  echo "${code}|${tmp}"
}

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  BOOKING SYSTEM – ACCEPTANCE SUITE (no payments)               ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo "Target: $BASE_URL"
echo "Service: $SERVICE_ID  Range: $RANGE_FROM +$RANGE_DAYS days"
echo

echo "━━━━━━━━ Pre-flight: health & availability ━━━━━━━━"
curl -s "$BASE_URL/health" | jq .
AV="$(curl -s "$BASE_URL/public/v1/services/$SERVICE_ID/availability?from_date=$RANGE_FROM&days=$RANGE_DAYS")"
COUNT="$(echo "$AV" | jq '.available_slots | length')"
echo "Available slots: $COUNT"
if [[ "$COUNT" -lt 3 ]]; then echo "Need at least 3 slots to run tests"; exit 1; fi
SLOT1="$(echo "$AV" | jq -r '.available_slots[0]')"
SLOT2="$(echo "$AV" | jq -r '.available_slots[1]')"
SLOT3="$(echo "$AV" | jq -r '.available_slots[2]')"
echo "Chosen slots:"
echo "  SLOT1: $SLOT1"
echo "  SLOT2: $SLOT2"
echo "  SLOT3: $SLOT3"
echo

echo "━━━━━━━━ Test 1: Create booking + Idempotency ━━━━━━━━"
IDEMP_KEY="suite-$(date +%s)"
REQ_DATA=$(jq -n --arg sid "$SERVICE_ID" --arg start "$SLOT1" \
  --arg name "Ada Lovelace" --arg email "ada@example.com" \
  '{service_id:$sid, starts_at:$start, customer_name:$name, customer_email:$email}')

# First attempt
RESP1="$(curl_capture "$BASE_URL/public/v1/bookings" \
  -X POST -H 'Content-Type: application/json' -H "Idempotency-Key: $IDEMP_KEY" \
  -d "$REQ_DATA")"
CODE1="${RESP1%%|*}"; BODY1="${RESP1#*|}"
echo "First attempt HTTP $CODE1"
is_json "$BODY1" && jq . <"$BODY1" || sed -n '1,80p' "$BODY1"
[[ "$CODE1" == "200" || "$CODE1" == "201" ]] || { echo "❌ Create failed"; exit 1; }
BOOKING_ID1="$(jq -r '.booking_id' <"$BODY1")"
[[ -n "$BOOKING_ID1" ]] || { echo "❌ No booking_id in response"; exit 1; }

# Retry with same idempotency key
RESP2="$(curl_capture "$BASE_URL/public/v1/bookings" \
  -X POST -H 'Content-Type: application/json' -H "Idempotency-Key: $IDEMP_KEY" \
  -d "$REQ_DATA")"
CODE2="${RESP2%%|*}"; BODY2="${RESP2#*|}"
echo "Retry attempt HTTP $CODE2"
if is_json "$BODY2"; then jq . <"$BODY2"; else echo "(non-JSON)"; sed -n '1,80p' "$BODY2"; fi

PASS=0
if [[ "$CODE2" == "200" || "$CODE2" == "201" ]]; then
  BOOKING_ID2="$(jq -r '.booking_id // empty' <"$BODY2")"
  [[ -n "$BOOKING_ID2" && "$BOOKING_ID2" == "$BOOKING_ID1" ]] && PASS=1
elif [[ "$CODE2" == "409" ]]; then
  PASS=1
fi
[[ "$PASS" == "1" ]] && echo "✅ Idempotency OK" || { echo "❌ Idempotency failed"; exit 1; }
echo

echo "━━━━━━━━ Test 2: Double-booking protection ━━━━━━━━"
# Five concurrent-ish attempts on the same slot (different idempotency keys)
FAILS=0; SUCC=0
for n in 1 2 3 4 5; do
  R="$(curl_capture "$BASE_URL/public/v1/bookings" \
    -X POST -H 'Content-Type: application/json' -H "Idempotency-Key: concurrent-$n" \
    -d "$(jq -n --arg sid "$SERVICE_ID" --arg start "$SLOT1" \
      --arg name "LoadTest$n" --arg email "lt$n@example.com" \
      '{service_id:$sid, starts_at:$start, customer_name:$name, customer_email:$email}')" )"
  C="${R%%|*}"; F="${R#*|}"
  if [[ "$C" == "200" || "$C" == "201" ]]; then SUCC=$((SUCC+1)); else FAILS=$((FAILS+1)); fi
  echo "  Attempt $n → HTTP $C"
done
# We expect at most 1 success for capacity=1
[[ "$SUCC" -le 1 ]] || { echo "❌ More than one success ($SUCC) → capacity breach"; exit 1; }
echo "✅ Double-booking protection OK (success=$SUCC, failures=$FAILS)"
echo

echo "━━━━━━━━ Test 3: Cancel / Reschedule tokens ━━━━━━━━"
# Create a fresh booking on SLOT2 so we can cancel/reschedule it
NEWKEY="suite-cancel-$(date +%s)"
R3="$(curl_capture "$BASE_URL/public/v1/bookings" \
  -X POST -H 'Content-Type: application/json' -H "Idempotency-Key: $NEWKEY" \
  -d "$(jq -n --arg sid "$SERVICE_ID" --arg start "$SLOT2" \
    --arg name "Grace Hopper" --arg email "grace@example.com" \
    '{service_id:$sid, starts_at:$start, customer_name:$name, customer_email:$email}')" )"
C3="${R3%%|*}"; F3="${R3#*|}"
[[ "$C3" == "200" || "$C3" == "201" ]] || { echo "❌ Could not create booking to test tokens"; exit 1; }
TOK_CANCEL="$(jq -r '.cancel_token' <"$F3")"
TOK_RESCH="$(jq -r '.reschedule_token' <"$F3")"
BID="$(jq -r '.booking_id' <"$F3")"
echo "Got booking $BID"
[[ -n "$TOK_CANCEL" && -n "$TOK_RESCH" ]] || { echo "❌ Missing tokens"; exit 1; }

# Reschedule to SLOT3
R4="$(curl_capture "$BASE_URL/public/v1/bookings/$BID/reschedule" \
  -X POST -H 'Content-Type: application/json' \
  -d "$(jq -n --arg token "$TOK_RESCH" --arg new "$SLOT3" '{reschedule_token:$token, new_starts_at:$new}')" )"
C4="${R4%%|*}"
echo "Reschedule HTTP $C4"
[[ "$C4" == "200" ]] || { echo "❌ Reschedule failed"; exit 1; }
echo "✅ Reschedule OK"

# Cancel after reschedule (just to test cancel path works)
R5="$(curl_capture "$BASE_URL/public/v1/bookings/$BID/cancel" \
  -X POST -H 'Content-Type: application/json' \
  -d "$(jq -n --arg token "$TOK_CANCEL" '{cancel_token:$token}')" )"
C5="${R5%%|*}"
echo "Cancel HTTP $C5"
[[ "$C5" == "200" ]] || { echo "❌ Cancel failed"; exit 1; }
echo "✅ Cancel OK"
echo
echo "🎉 ALL TESTS PASSED"
