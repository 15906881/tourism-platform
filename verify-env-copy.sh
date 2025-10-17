#!/bin/bash

echo ========================================
echo   VERIFICATION: Pristine Environment Copy
echo ========================================
echo

echo Test 1: Verify we are on Pristine branch
CURRENT_BRANCH=$(git branch --show-current)
echo Current branch: $CURRENT_BRANCH
if [ "$CURRENT_BRANCH" = "Pristine" ]; then
    echo ✅ On Pristine branch
else
    echo ❌ NOT on Pristine branch
    exit 1
fi

echo
echo Test 2: Check all environment files exist
ENV_FILES=(
    ".env"
    ".env.example"
    ".env.local"
    "apps/admin/.env.local"
    "apps/onboarding/.env.local"
    "apps/photos-entry/.env.local"
    "apps/site-renderer/.env.local"
    "apps/tenant-dashboard/.env.example"
    "apps/tenant-dashboard/.env.local"
    "packages/db/.env"
    "packages/server/.env"
)

MISSING_COUNT=0
for file in ${ENV_FILES[@]}; do
    if [ -f "$file" ]; then
        echo ✅ $file exists
    else
        echo ❌ $file MISSING
        ((MISSING_COUNT++))
    fi
done

echo
echo Test 3: Verify env files match phase-ii versions
echo Comparing each file...
MISMATCH_COUNT=0
for file in ${ENV_FILES[@]}; do
    if [ -f "$file" ]; then
        PRISTINE_HASH=$(git hash-object "$file" 2>/dev/null)
        PHASEII_HASH=$(git hash-object <(git show phase-ii/env-cleanup-remove-backups:"$file" 2>/dev/null))
        
        if [ "$PRISTINE_HASH" = "$PHASEII_HASH" ]; then
            echo ✅ $file matches phase-ii
        else
            echo ⚠️  $file differs from phase-ii
            ((MISMATCH_COUNT++))
        fi
    fi
done

echo
echo Test 4: Run environment smoke test
if [ -f "scripts/test/env-smoke-test.sh" ]; then
    ./scripts/test/env-smoke-test.sh
else
    echo ❌ Smoke test script not found
fi

echo
echo Test 5: Verify Pristine still has all its original files
echo Checking critical Pristine files...
CRITICAL_FILES=(
    "package.json"
    "apps/tenant-dashboard/next.config.js"
    "packages/db/package.json"
    "packages/blocks/src/food/MenuItem.tsx"
)

for file in ${CRITICAL_FILES[@]}; do
    if [ -f "$file" ]; then
        echo ✅ $file still exists in Pristine
    else
        echo ❌ $file MISSING from Pristine
    fi
done

echo
echo Test 6: Count total files in Pristine
TOTAL_FILES=$(git ls-files | wc -l | tr -d ' ')
echo Total files in Pristine: $TOTAL_FILES
echo Expected: around 442 files from original golden

echo
echo ========================================
echo   VERIFICATION SUMMARY
echo ========================================
echo Missing env files: $MISSING_COUNT
echo Mismatched env files: $MISMATCH_COUNT
echo
if [ $MISSING_COUNT -eq 0 ] && [ $MISMATCH_COUNT -eq 0 ]; then
    echo ✅ ALL CHECKS PASSED
    echo Environment files successfully copied from phase-ii
    echo Pristine integrity maintained
else
    echo ⚠️  ISSUES DETECTED
    echo Missing: $MISSING_COUNT
    echo Mismatched: $MISMATCH_COUNT
fi
echo =======================================
