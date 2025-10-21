#!/bin/bash
set -e

echo "🧪 Testing tenant isolation..."

# Get two distinct tenant IDs from the database
TENANT_A=$(psql "$DATABASE_URL" -t -c "SELECT id::text FROM core.tenants LIMIT 1;")
TENANT_B=$(psql "$DATABASE_URL" -t -c "SELECT id::text FROM core.tenants OFFSET 1 LIMIT 1;")

echo "Testing with Tenant A: $TENANT_A"
echo "Testing with Tenant B: $TENANT_B"
echo ""

# Test tenant isolation for users table
echo "=== Testing core.users table ==="
psql "$DATABASE_URL" -c "
SET app.current_tenant TO '$TENANT_A';
SELECT 'Tenant A users count: ' || COUNT(*)::text FROM core.users;

SET app.current_tenant TO '$TENANT_B';  
SELECT 'Tenant B users count: ' || COUNT(*)::text FROM core.users;
"

# Test tenant isolation for accounts table (via memberships)
echo ""
echo "=== Testing core.accounts table (via memberships) ==="
psql "$DATABASE_URL" -c "
SET app.current_tenant TO '$TENANT_A';
SELECT 'Tenant A accounts count: ' || COUNT(DISTINCT a.id)::text 
FROM core.accounts a
JOIN core.memberships m ON m.account_id = a.id
WHERE m.tenant_id = '$TENANT_A'::uuid;

SET app.current_tenant TO '$TENANT_B';
SELECT 'Tenant B accounts count: ' || COUNT(DISTINCT a.id)::text 
FROM core.accounts a
JOIN core.memberships m ON m.account_id = a.id
WHERE m.tenant_id = '$TENANT_B'::uuid;
"

echo ""
echo "✅ Tenant isolation test complete"
echo "   Expected: Different counts for different tenants"
echo "   Failure: Same counts = data leakage"
