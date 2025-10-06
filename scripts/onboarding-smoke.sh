#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-http://localhost:3000}"
JAR="$(mktemp)"

pass(){ echo "✅ $*"; }
fail(){ echo "❌ $*"; exit 1; }

wait_for() {
  local url="$1" tries=60
  for _ in $(seq 1 "$tries"); do
    if curl -fsS "$url" >/dev/null; then return 0; fi
    sleep 0.5
  done
  echo "Server not ready: $url" >&2
  exit 1
}

# Wait for server
wait_for "$BASE/api/health"

# 1) Register (must set cookie)
reg=$(
  curl -fsS -i -c "$JAR" -X POST "$BASE/api/onboarding/register" \
    -H 'content-type: application/json' \
    -H "origin: $BASE" -e "$BASE" \
    --data '{"email":"dev@example.com","company":"Acme"}'
)
echo "$reg" | grep -qi 'set-cookie: onb_tenant=' && pass "register set cookie" || fail "register did not set cookie"

call_ok() {
  local path="$1" data="$2"
  local out
  out=$(
    curl -fsS -b "$JAR" -X POST "$BASE$path" \
      -H 'content-type: application/json' \
      -H "origin: $BASE" -e "$BASE" \
      --data "$data"
  )
  echo "$out" | grep -q '"ok":true\|"result":{"data":' \
    && pass "ok $path" \
    || { echo "$out"; fail "expected ok for $path"; }
}

# 2) Happy path
call_ok /api/trpc/onboarding.setVertical  '{"vertical":"service-booking"}'
call_ok /api/trpc/onboarding.setTemplate  '{"template":"clean"}'
call_ok /api/trpc/onboarding.setTheme     '{"themeId":"midnight"}'

# 3) Tamper (bad signature) -> UNAUTHORIZED/403
tamper=$(
  curl -sS -i -X POST "$BASE/api/trpc/onboarding.setTemplate" \
    -H 'content-type: application/json' \
    -H "origin: $BASE" -e "$BASE" \
    -H 'cookie: onb_tenant=stub-tenant-0001.badSig' \
    --data '{"template":"clean"}'
)
echo "$tamper" | grep -qE 'UNAUTHORIZED|403|Forbidden' && pass "tamper blocked" || fail "tamper not blocked"

# 4) No cookie -> UNAUTHORIZED/403
nocookie=$(
  curl -sS -i -X POST "$BASE/api/trpc/onboarding.setTemplate" \
    -H 'content-type: application/json' \
    -H "origin: $BASE" -e "$BASE" \
    --data '{"template":"clean"}'
)
echo "$nocookie" | grep -qE 'UNAUTHORIZED|403|Forbidden' && pass "no-cookie blocked" || fail "no-cookie not blocked"
