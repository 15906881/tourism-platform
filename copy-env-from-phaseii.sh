#!/bin/bash

echo ========================================
echo   COPY ENV FILES: Phase-II to Pristine
echo ========================================
echo

echo Step 1: Verify we are on Pristine branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "Pristine" ]; then
    echo Switching to Pristine branch...
    git checkout Pristine
fi

echo Step 2: Create backup
git branch Pristine-backup-before-env-copy

echo Step 3: Copy environment files from phase-ii
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

echo
echo Copying environment files from phase-ii...
for file in ${ENV_FILES[@]}; do
    git checkout phase-ii/env-cleanup-remove-backups -- "$file" 2>/dev/null
    if [ $? -eq 0 ]; then
        git add "$file"
        echo ✅ Copied: $file
    else
        echo ⚠️  Not found in phase-ii: $file
    fi
done

echo
echo Step 4: Verify the changes
git status

echo
echo Step 5: Run smoke test to verify
if [ -f "scripts/test/env-smoke-test.sh" ]; then
    echo
    echo Running smoke test...
    ./scripts/test/env-smoke-test.sh
else
    echo ⚠️  Smoke test not found, skipping verification
fi

echo
echo ========================================
echo   ENV FILES COPIED SUCCESSFULLY
echo ========================================
echo
echo Next steps:
echo 1. Review changes: git diff --cached
echo 2. If everything looks good, commit:
echo    git commit -m "chore: copy clean environment config from phase-ii"
echo 3. If you need to undo: git checkout Pristine-backup-before-env-copy
echo ========================================
