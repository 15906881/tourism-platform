#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-http://localhost:3000}"
JAR="/tmp/jar.txt"

pass(){ echo "✅ $*"; }
fail(){ echo "❌ $*"; exit 1; }

# Always start clean
rm -f "$JAR"

# Helper to POST JSON to tRPC with proper headers
post_trpc () {
  local path="$1" json="$2"
  curl -sS -b "$JAR" -X POST "$BASE$path" \
    -H 'content-type: application/json' \
    -H "origin: $BASE" \
    -H "referer: $BASE/" \
    --data "$json"
}

# 1) Register: sets signed HttpOnly cookie
reg=$(curl -sS -i -c "$JAR" -X POST "$BASE/api/onboarding/register" \
  -H 'content-type: application/json' \
  -H "origin: $BASE" -H "referer: $BASE/" \
  --data '{"email":"dev@example.com","company":"Acme"}')

echo "$reg" | grep -qi '^set-cookie: .*onb_tenant=' && pass "register set cookie" || fail "register did not set cookie"

# 2) Happy path with cookie
resp=$(post_trpc /api/trpc/onboarding.setVertical  '{"vertical":"service-booking"}')
node -e 'const r=JSON.parse(process.argv[1]); if(!(r?.result?.data?.ok)) process.exit(1)' "$resp" && pass "ok /api/trpc/onboarding.setVertical" || fail "expected ok for /api/trpc/onboarding.setVertical"

resp=$(post_trpc /api/trpc/onboarding.setTemplate  '{"template":"clean"}')
node -e 'const r=JSON.parse(process.argv[1]); if(!(r?.result?.data?.ok)) process.exit(1)' "$resp" && pass "ok /api/trpc/onboarding.setTemplate" || fail "expected ok for /api/trpc/onboarding.setTemplate"

resp=$(post_trpc /api/trpc/onboarding.setTheme     '{"themeId":"midnight"}')
node -e 'const r=JSON.parse(process.argv[1]); if(!(r?.result?.data?.ok)) process.exit(1)' "$resp" && pass "ok /api/trpc/onboarding.setTheme" || fail "expected ok for /api/trpc/onboarding.setTheme"

# 3) Tamper: bad signature -> UNAUTHORIZED
tamper=$(curl -sS -X POST "$BASE/api/trpc/onboarding.setTemplate" \
  -H 'content-type: application/json' -H "origin: $BASE" -H "referer: $BASE/" \
  -H 'cookie: onb_tenant=stub-tenant-0001.badSig' \
  --data '{"template":"clean"}' || true)
echo "$tamper" | grep -q 'UNAUTHORIZED' && pass "tamper blocked" || fail "tamper not blocked"

# 4) No cookie -> UNAUTHORIZED
nocookie=$(curl -sS -X POST "$BASE/api/trpc/onboarding.setTemplate" \
  -H 'content-type: application/json' -H "origin: $BASE" -H "referer: $BASE/" \
  --data '{"template":"clean"}' || true)
echo "$nocookie" | grep -q 'UNAUTHORIZED' && pass "no-cookie blocked" || fail "no-cookie not blocked"
