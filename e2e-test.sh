#!/bin/bash

# Complete End-to-End Test for Tourism Platform
# This script tests database connectivity, imports, API endpoints, and more

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test results tracking
TESTS_PASSED=0
TESTS_FAILED=0
TESTS_TOTAL=0

# Helper functions
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_test() {
    echo -e "${YELLOW}TEST $TESTS_TOTAL:${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ PASS:${NC} $1"
    ((TESTS_PASSED++))
}

print_failure() {
    echo -e "${RED}❌ FAIL:${NC} $1"
    ((TESTS_FAILED++))
}

print_info() {
    echo -e "${BLUE}ℹ️  INFO:${NC} $1"
}

run_test() {
    ((TESTS_TOTAL++))
    print_test "$1"
}

# Start testing
print_header "TOURISM PLATFORM - COMPLETE E2E TEST SUITE"
echo "Started at: $(date)"
echo ""

# =============================================================================
# TEST SUITE 1: Environment & Configuration
# =============================================================================
print_header "1. ENVIRONMENT & CONFIGURATION TESTS"

run_test "PostgreSQL is running and accessible"
if psql -h localhost -p 5432 -U sadeshibeshi -d postgres -c "SELECT 1;" > /dev/null 2>&1; then
    print_success "PostgreSQL is running"
else
    print_failure "PostgreSQL is not accessible"
fi

run_test "tourism_dev database exists"
if psql -h localhost -p 5432 -U sadeshibeshi -d postgres -c "SELECT 1 FROM pg_database WHERE datname='tourism_dev';" 2>/dev/null | grep -q 1; then
    print_success "Database 'tourism_dev' exists"
else
    print_failure "Database 'tourism_dev' does not exist"
fi

run_test "Environment variables are set"
if [ -f apps/tenant-dashboard/.env.local ]; then
    if grep -q "DATABASE_URL" apps/tenant-dashboard/.env.local; then
        print_success ".env.local exists with DATABASE_URL"
        print_info "DATABASE_URL: $(grep DATABASE_URL apps/tenant-dashboard/.env.local | head -1 | cut -d'=' -f2 | cut -d'?' -f1)"
    else
        print_failure "DATABASE_URL not found in .env.local"
    fi
else
    print_failure ".env.local file not found"
fi

# =============================================================================
# TEST SUITE 2: Database Connection Tests
# =============================================================================
print_header "2. DATABASE CONNECTION TESTS"

run_test "Direct database connection"
RESULT=$(psql -h localhost -p 5432 -U sadeshibeshi -d tourism_dev -t -c "SELECT current_database(), current_user;" 2>&1)
if echo "$RESULT" | grep -q "tourism_dev"; then
    print_success "Direct psql connection works"
    print_info "Connected as: $(echo $RESULT | awk '{print $2}')"
else
    print_failure "Direct psql connection failed"
fi

run_test "Database user has proper privileges"
PRIVS=$(psql -h localhost -p 5432 -U sadeshibeshi -d tourism_dev -t -c "SELECT has_database_privilege('sadeshibeshi', 'tourism_dev', 'CONNECT');" 2>&1)
if echo "$PRIVS" | grep -q "t"; then
    print_success "User has CONNECT privilege"
else
    print_failure "User lacks CONNECT privilege"
fi

run_test "Schema 'core' exists and is accessible"
SCHEMA_CHECK=$(psql -h localhost -p 5432 -U sadeshibeshi -d tourism_dev -t -c "SELECT schema_name FROM information_schema.schemata WHERE schema_name='core';" 2>&1)
if echo "$SCHEMA_CHECK" | grep -q "core"; then
    print_success "Schema 'core' exists"
else
    print_failure "Schema 'core' does not exist"
fi

# =============================================================================
# TEST SUITE 3: Package Structure & Dependencies
# =============================================================================
print_header "3. PACKAGE STRUCTURE & DEPENDENCIES"

run_test "packages/db directory structure"
if [ -d "packages/db" ] && [ -f "packages/db/package.json" ]; then
    print_success "packages/db exists with package.json"
else
    print_failure "packages/db structure is incorrect"
fi

run_test "Prisma schema file exists"
if [ -f "packages/db/prisma/schema.prisma" ]; then
    print_success "Prisma schema file found"
    MODELS=$(grep "^model " packages/db/prisma/schema.prisma | wc -l | tr -d ' ')
    print_info "Schema contains $MODELS models"
else
    print_failure "Prisma schema file not found"
fi

run_test "Prisma client is generated"
if [ -d "packages/db/generated/prisma" ]; then
    print_success "Prisma client generated directory exists"
    if [ -f "packages/db/generated/prisma/client.js" ]; then
        print_success "Prisma client.js exists"
    else
        print_failure "Prisma client.js not found"
    fi
else
    print_failure "Prisma client not generated"
fi

run_test "Node modules installed"
if [ -d "node_modules" ] && [ -d "packages/db/node_modules" ]; then
    print_success "Node modules installed"
else
    print_failure "Node modules missing - run npm install"
fi

# =============================================================================
# TEST SUITE 4: Import Path Verification
# =============================================================================
print_header "4. IMPORT PATH VERIFICATION"

run_test "No files using old @prisma/client import"
OLD_IMPORTS=$(grep -r "from.*@prisma/client" apps/tenant-dashboard --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v node_modules | grep -v ".backup" | wc -l | tr -d ' ')
if [ "$OLD_IMPORTS" -eq 0 ]; then
    print_success "No old @prisma/client imports found"
else
    print_failure "Found $OLD_IMPORTS files still using @prisma/client"
fi

run_test "All files use correct @weblynk/db import"
NEW_IMPORTS=$(grep -r "from.*@weblynk/db" apps/tenant-dashboard --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v node_modules | wc -l | tr -d ' ')
if [ "$NEW_IMPORTS" -gt 0 ]; then
    print_success "Found $NEW_IMPORTS files with correct @weblynk/db imports"
else
    print_failure "No files using @weblynk/db imports"
fi

# =============================================================================
# TEST SUITE 5: Prisma Client Tests
# =============================================================================
print_header "5. PRISMA CLIENT FUNCTIONALITY"

run_test "Prisma client can connect to database"
cd packages/db
TEST_RESULT=$(node -e "
const { PrismaClient } = require('./generated/prisma/client.js');
const prisma = new PrismaClient();
prisma.\$connect()
  .then(() => {
    console.log('SUCCESS');
    return prisma.\$disconnect();
  })
  .catch((e) => {
    console.log('ERROR:', e.message);
    process.exit(1);
  });
" 2>&1)

if echo "$TEST_RESULT" | grep -q "SUCCESS"; then
    print_success "Prisma client connection works"
else
    print_failure "Prisma client connection failed"
fi
cd ../..

run_test "Prisma can execute queries"
cd packages/db
QUERY_RESULT=$(node -e "
const { PrismaClient } = require('./generated/prisma/client.js');
async function test() {
  const prisma = new PrismaClient();
  try {
    const result = await prisma.\$queryRaw\`SELECT 1 as test\`;
    console.log('SUCCESS');
    await prisma.\$disconnect();
  } catch (e) {
    console.log('ERROR:', e.message);
    process.exit(1);
  }
}
test();
" 2>&1)

if echo "$QUERY_RESULT" | grep -q "SUCCESS"; then
    print_success "Prisma can execute raw queries"
else
    print_failure "Prisma query execution failed"
fi
cd ../..

# =============================================================================
# TEST SUITE 6: API Endpoint Tests
# =============================================================================
print_header "6. API ENDPOINT TESTS"

print_info "Starting Next.js development server..."
cd apps/tenant-dashboard
npm run dev > /tmp/nextjs-e2e-test.log 2>&1 &
DEV_PID=$!
cd ../..

print_info "Waiting for server to start (15 seconds)..."
sleep 15

# Check if server is actually running
if ps -p $DEV_PID > /dev/null 2>&1; then
    print_success "Dev server started (PID: $DEV_PID)"
else
    print_failure "Dev server failed to start"
    ((TESTS_TOTAL++))
    cat /tmp/nextjs-e2e-test.log 2>/dev/null || echo "No log file found"
fi

if ps -p $DEV_PID > /dev/null 2>&1; then
    run_test "API endpoint: /api/health/db-whoami"
    # Save response to temp file to avoid head issues
    curl -s http://localhost:3000/api/health/db-whoami > /tmp/whoami-response.json 2>/dev/null
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/health/db-whoami 2>/dev/null)
    BODY=$(cat /tmp/whoami-response.json)

    if [ "$HTTP_CODE" = "200" ]; then
        print_success "Endpoint returned 200 OK"
        if echo "$BODY" | grep -q '"ok":true'; then
            print_success "Response indicates successful database connection"
            DB_NAME=$(echo $BODY | grep -o '"db":"[^"]*"' | cut -d'"' -f4)
            USER_NAME=$(echo $BODY | grep -o '"user":"[^"]*"' | cut -d'"' -f4)
            [ -n "$DB_NAME" ] && print_info "Database: $DB_NAME"
            [ -n "$USER_NAME" ] && print_info "User: $USER_NAME"
        else
            print_failure "Response indicates database error"
            echo "$BODY"
        fi
    else
        print_failure "Endpoint returned $HTTP_CODE"
        echo "$BODY"
    fi

    run_test "API endpoint: /api/health/db"
    curl -s http://localhost:3000/api/health/db > /tmp/health-response.json 2>/dev/null
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/health/db 2>/dev/null)
    BODY=$(cat /tmp/health-response.json)

    if [ "$HTTP_CODE" = "200" ]; then
        print_success "Health endpoint returned 200 OK"
        if echo "$BODY" | grep -q '"ok":true'; then
            print_success "Health check passed"
        else
            print_failure "Health check failed"
            echo "$BODY"
        fi
    else
        print_failure "Endpoint returned $HTTP_CODE"
        echo "$BODY"
    fi

    run_test "API endpoint: /api/onboarding/register exists"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X GET http://localhost:3000/api/onboarding/register 2>/dev/null)

    if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "405" ]; then
        print_success "Register endpoint exists (returned $HTTP_CODE)"
    else
        print_failure "Register endpoint returned unexpected $HTTP_CODE"
    fi
fi

# Cleanup
if ps -p $DEV_PID > /dev/null 2>&1; then
    print_info "Stopping dev server..."
    kill $DEV_PID 2>/dev/null || true
    sleep 2
fi

# =============================================================================
# TEST SUITE 7: Schema Sync Status
# =============================================================================
print_header "7. SCHEMA SYNCHRONIZATION"

run_test "Prisma schema is in sync with database"
cd packages/db
SYNC_CHECK=$(npx prisma db push --skip-generate 2>&1 || true)
if echo "$SYNC_CHECK" | grep -q "already in sync\|No changes"; then
    print_success "Schema is in sync with database"
else
    print_failure "Schema may be out of sync"
fi
cd ../..

# =============================================================================
# FINAL REPORT
# =============================================================================
print_header "TEST SUITE SUMMARY"

echo "Total Tests: $TESTS_TOTAL"
echo -e "${GREEN}Passed: $TESTS_PASSED${NC}"
echo -e "${RED}Failed: $TESTS_FAILED${NC}"
echo ""

if [ $TESTS_TOTAL -gt 0 ]; then
    PASS_RATE=$((TESTS_PASSED * 100 / TESTS_TOTAL))
    echo "Pass Rate: ${PASS_RATE}%"
fi
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED! Your tourism platform is fully operational.${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  $TESTS_FAILED test(s) failed. Please review the output above.${NC}"
    exit 1
fi
