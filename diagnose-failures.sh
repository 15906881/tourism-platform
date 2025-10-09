#!/bin/bash

echo "========================================="
echo "DIAGNOSING TEST FAILURES"
echo "========================================="
echo ""

echo "1. Testing Prisma Client Connection (TEST 13 & 14)"
echo "---------------------------------------------------"
cd packages/db
echo "Running direct Prisma test..."
node -e "
const { PrismaClient } = require('./generated/prisma/client.js');
async function test() {
  const prisma = new PrismaClient({
    log: ['error', 'warn']
  });
  try {
    console.log('Attempting to connect...');
    await prisma.\$connect();
    console.log('✅ Connection successful');
    
    console.log('Attempting query...');
    const result = await prisma.\$queryRaw\`SELECT 1 as test\`;
    console.log('✅ Query successful:', result);
    
    await prisma.\$disconnect();
  } catch (e) {
    console.log('❌ Error:', e.message);
    console.log('Full error:', e);
  }
}
test();
"
cd ../..

echo ""
echo "2. Testing API Endpoints (TEST 15 & 16)"
echo "---------------------------------------------------"
echo "Starting dev server..."
cd apps/tenant-dashboard
npm run dev > /tmp/diag-test.log 2>&1 &
DEV_PID=$!
cd ../..

echo "Waiting 15 seconds for server..."
sleep 15

echo ""
echo "Testing /api/health/db-whoami:"
RESPONSE=$(curl -s http://localhost:3000/api/health/db-whoami)
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"

echo ""
echo "Testing /api/health/db:"
RESPONSE=$(curl -s http://localhost:3000/api/health/db)
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"

echo ""
echo "Checking server logs:"
tail -30 /tmp/diag-test.log

echo ""
echo "Stopping dev server..."
kill $DEV_PID 2>/dev/null
sleep 2

echo ""
echo "3. Checking Schema Sync (TEST 18)"
echo "---------------------------------------------------"
cd packages/db
echo "Running prisma db push --skip-generate:"
npx prisma db push --skip-generate 2>&1 | head -20
cd ../..

echo ""
echo "4. Environment Check"
echo "---------------------------------------------------"
echo "DATABASE_URL from .env.local:"
grep DATABASE_URL apps/tenant-dashboard/.env.local 2>/dev/null || echo "Not found"

echo ""
echo "DATABASE_URL from packages/db/.env:"
grep DATABASE_URL packages/db/.env 2>/dev/null || echo "Not found"

echo ""
echo "========================================="
echo "DIAGNOSIS COMPLETE"
echo "========================================="
