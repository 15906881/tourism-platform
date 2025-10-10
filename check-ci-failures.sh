#!/bin/bash

echo "========================================="
echo "DIAGNOSING CI/CD FAILURES"
echo "========================================="
echo ""

echo "1. Running TypeScript Check (locally)"
echo "---------------------------------------------------"
cd apps/tenant-dashboard
echo "Checking TypeScript errors..."
npx tsc --noEmit 2>&1 | head -50
cd ../..

echo ""
echo "2. Running ESLint Check (locally)"
echo "---------------------------------------------------"
cd apps/tenant-dashboard
echo "Checking ESLint errors..."
npx eslint . --ext .ts,.tsx 2>&1 | head -50
cd ../..

echo ""
echo "3. Checking if tests exist and can run"
echo "---------------------------------------------------"
if [ -d "apps/tenant-dashboard/__tests__" ] || [ -d "apps/tenant-dashboard/tests" ]; then
    echo "Test directory found"
    cd apps/tenant-dashboard
    npm test 2>&1 | head -50
    cd ../..
else
    echo "No test directory found"
fi

echo ""
echo "4. Checking Playwright tests"
echo "---------------------------------------------------"
if [ -f "apps/tenant-dashboard/playwright.config.ts" ]; then
    echo "Playwright config found"
    cd apps/tenant-dashboard
    npx playwright test --list 2>&1 | head -20
    cd ../..
else
    echo "No Playwright config found"
fi

echo ""
echo "5. Checking package.json scripts"
echo "---------------------------------------------------"
echo "Available scripts in tenant-dashboard:"
cat apps/tenant-dashboard/package.json | grep -A 20 '"scripts"'

echo ""
echo "========================================="
echo "DIAGNOSIS COMPLETE"
echo "========================================="
