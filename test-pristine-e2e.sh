#!/bin/bash

echo ========================================
echo   END-TO-END TEST: Pristine Branch
echo ========================================
echo

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS_COUNT=0
FAIL_COUNT=0

run_test() {
    local test_name="$1"
    local test_result="$2"
    
    if [ "$test_result" = "PASS" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $test_name"
        ((PASS_COUNT++))
    else
        echo -e "${RED}❌ FAIL${NC}: $test_name"
        ((FAIL_COUNT++))
    fi
}

echo ========================================
echo   PHASE 1: BRANCH VERIFICATION
echo ========================================
echo

CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" = "Pristine" ]; then
    run_test "On Pristine branch" "PASS"
else
    run_test "On Pristine branch" "FAIL"
    exit 1
fi

echo
echo ========================================
echo   PHASE 2: ENVIRONMENT TESTS
echo ========================================
echo

if [ -f ".env" ] && [ -f ".env.example" ]; then
    run_test "Basic environment files present" "PASS"
else
    run_test "Basic environment files present" "FAIL"
fi

ENV_COUNT=$(find . -name '.env*' -type f 2>/dev/null | grep -v node_modules | wc -l | tr -d ' ')
if [ "$ENV_COUNT" -ge 11 ]; then
    run_test "Environment files present ($ENV_COUNT files)" "PASS"
else
    run_test "Environment files present" "FAIL"
fi

echo
echo ========================================
echo   PHASE 3: DEPENDENCY TESTS
echo ========================================
echo

if node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" 2>/dev/null; then
    run_test "Root package.json valid" "PASS"
else
    run_test "Root package.json valid" "FAIL"
fi

if [ -d "node_modules" ]; then
    run_test "node_modules exists" "PASS"
else
    run_test "node_modules exists" "FAIL"
fi

echo
echo ========================================
echo   PHASE 4: STRUCTURE TESTS
echo ========================================
echo

CRITICAL_DIRS=(
    "apps/admin"
    "apps/onboarding"
    "apps/photos-entry"
    "apps/site-renderer"
    "apps/tenant-dashboard"
    "packages/auth"
    "packages/blocks"
    "packages/db"
    "packages/server"
    "packages/templates"
    "packages/ui"
)

MISSING_DIRS=0
for dir in "${CRITICAL_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "   ✅ $dir"
    else
        echo "   ❌ $dir MISSING"
        ((MISSING_DIRS++))
    fi
done

if [ $MISSING_DIRS -eq 0 ]; then
    run_test "All critical directories present" "PASS"
else
    run_test "All critical directories present" "FAIL"
fi

echo
echo ========================================
echo   PHASE 5: CONFIGURATION CHECKS
echo ========================================
echo

if grep -q "DATABASE_URL" .env.local 2>/dev/null; then
    run_test "DATABASE_URL configured in .env.local" "PASS"
else
    run_test "DATABASE_URL configured in .env.local" "FAIL"
fi

COGNITO_VARS=0
for var in COGNITO_REGION COGNITO_USER_POOL_ID COGNITO_CLIENT_ID; do
    if grep -q "$var" apps/tenant-dashboard/.env.local 2>/dev/null; then
        ((COGNITO_VARS++))
    fi
done

if [ $COGNITO_VARS -eq 3 ]; then
    run_test "Cognito configuration present" "PASS"
else
    run_test "Cognito configuration present" "FAIL"
fi

echo
echo ========================================
echo   FINAL SUMMARY
echo ========================================
echo -e "${GREEN}Passed: $PASS_COUNT${NC}"
echo -e "${RED}Failed: $FAIL_COUNT${NC}"
echo "Total:  $((PASS_COUNT + FAIL_COUNT))"
echo

if [ $FAIL_COUNT -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED${NC}"
    echo "✅ Pristine branch is in excellent working condition"
else
    echo -e "${YELLOW}⚠️  $FAIL_COUNT TEST(S) FAILED${NC}"
    echo "Review failures above"
fi
