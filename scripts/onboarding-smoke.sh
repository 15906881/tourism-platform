#!/usr/bin/env bash
set -euo pipefail

BASE=${1:-http://localhost:3000}
JAR="$(mktemp)"
cleanup(){ rm -f "$JAR"; }
trap cleanup EXIT

pass(){ echo "✅ $*"; }
fail(){ echo "❌ $*"; exit 1; }

# 1) Register (sets HttpOnly cookie)
resp=$(curl -sS -i -c "$JAR" -X POST "$BASE/api/onboarding/register" \
  -H 'content-type: application/json' -H "origin: $BASE" \
  --data '{"email":"dev@example.com","company":"Acme"}')

echo "$resp" | grep -qi '^HTTP/1.1 200' || fail "register http"
grep -q 'onb_tenant' "$JAR" || fail "missing cookie"
pass "register set cookie"

# Helper: expect ok:true
call_ok(){
  local path="$1" body="$2"
  curl -sS -b "$JAR" -X POST "$BASE$path" \
    -H 'content-type: application/json' -H "origin: $BASE" \
    --data "$body" \
    | node -e 'let s="";process.stdin.on("data",c=>s+=c).on("end",()=>{const j=JSON.parse(s); if(!(j.result&&j.result.data&&j.result.data.ok===true)) process.exit(1);});' \
  || fail "expected ok for $path"
  pass "ok $path"
}

# 2) Happy path
call_ok /api/trpc/onboarding.setVertical  '{"vertical":"service-booking"}'
call_ok /api/trpc/onboarding.setTemplate  '{"template":"clean"}'
call_ok /api/trpc/onboarding.setTheme     '{"themeId":"midnight"}'

# 3) Tamper (bad signature) -> UNAUTHORIZED
tamper=$(curl -sS -X POST "$BASE/api/trpc/onboarding.setTemplate" \
  -H 'content-type: application/json' -H "origin: $BASE" \
  -H 'cookie: onb_tenant=stub-tenant-0001.badSig' \
  --data '{"template":"clean"}')
echo "$tamper" | grep -q 'UNAUTHORIZED' && pass "tamper blocked" || fail "tamper not blocked"

# 4) No cookie -> UNAUTHORIZED
nocookie=$(curl -sS -X POST "$BASE/api/trpc/onboarding.setTemplate" \
  -H 'content-type: application/json' -H "origin: $BASE" \
  --data '{"template":"clean"}')
echo "$nocookie" | grep -q 'UNAUTHORIZED' && pass "no-cookie blocked" || fail "no-cookie not blocked"
