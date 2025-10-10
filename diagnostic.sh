#!/bin/bash
echo "🎯 COMPREHENSIVE SYSTEM DIAGNOSTIC"
echo "==================================="

echo "1. PNPM WORKSPACE DEPENDENCIES"
echo "-------------------------------"
pnpm ls --depth 1

echo ""
echo "2. PRISMA CLIENT STATUS"  
echo "-----------------------"
ls -la packages/db/generated/prisma/ 2>/dev/null || echo "❌ No generated client"
ls -la apps/tenant-dashboard/node_modules/.prisma/ 2>/dev/null || echo "❌ No client in dashboard"

echo ""
echo "3. DATABASE CONNECTIONS"
echo "-----------------------"
psql -d tourism_dev -c "SELECT current_user, current_database(), current_schema();" 2>/dev/null && echo "✅ PSQL direct: OK" || echo "❌ PSQL direct: FAILED"

echo ""
echo "4. ENVIRONMENT VARIABLES"
echo "------------------------"
echo "DB Package .env:"
cat packages/db/.env
echo ""
echo "Dashboard .env.local:"
cat apps/tenant-dashboard/.env.local 2>/dev/null || echo "No .env.local"

echo ""
echo "5. DATABASE PERMISSIONS"
echo "-----------------------"
psql -d tourism_dev -c "
SELECT 
  table_name,
  has_table_privilege('sadeshibeshi', 'core.' || table_name, 'INSERT') as can_insert,
  has_table_privilege('sadeshibeshi', 'core.' || table_name, 'UPDATE') as can_update,
  has_table_privilege('sadeshibeshi', 'core.' || table_name, 'DELETE') as can_delete
FROM information_schema.tables 
WHERE table_schema = 'core' 
LIMIT 5;
" 2>/dev/null || echo "❌ Permission check failed"

echo ""
echo "6. PRISMA VALIDATION"
echo "--------------------"
cd packages/db && npx prisma validate && cd ../.. || echo "❌ Prisma validation failed"

echo ""
echo "7. NODE.JS DIRECT CONNECTION TEST"
echo "---------------------------------"
node -e "
const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432, 
  database: 'tourism_dev',
  user: 'sadeshibeshi'
});
client.connect()
  .then(() => {
    console.log('✅ Direct Node.js PG: OK');
    return client.query('INSERT INTO core.tenants (id, name) VALUES (\$1, \$2) ON CONFLICT (id) DO NOTHING', ['test-' + Date.now(), 'Test'])
      .then(() => console.log('✅ Direct Node.js INSERT: OK'))
      .catch(e => console.log('❌ Direct Node.js INSERT:', e.message));
  })
  .catch(e => console.log('❌ Direct Node.js PG:', e.message))
  .finally(() => client.end());
" 2>/dev/null || echo "❌ Node.js test failed"

echo ""
echo "8. COGNITO CONFIGURATION"
echo "------------------------"
aws cognito-idp describe-user-pool --region us-east-1 --user-pool-id us-east-1_WgdTIpEMe --query 'UserPool.Id' 2>/dev/null && echo "✅ Cognito config: OK" || echo "❌ Cognito config: FAILED"

echo ""
echo "9. SERVER STATUS"
echo "----------------"
curl -s http://localhost:3001/api/health/db | jq . 2>/dev/null && echo "✅ Health endpoint: OK" || echo "❌ Health endpoint: FAILED"

echo ""
echo "10. NETWORK/PORTS"
echo "-----------------"
echo "Ports in use:"
lsof -i :3000-3010 2>/dev/null | head -5 || echo "No ports found in range"

echo ""
echo "==================================="
echo "🎯 DIAGNOSTIC COMPLETE"
