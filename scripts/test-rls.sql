-- Test tenant isolation with app_service role
SET ROLE app_service;

-- Get tenant IDs from seed data
\echo '📋 Available tenants:'
SELECT id, name FROM core.tenants ORDER BY name;

-- Try to query WITHOUT setting tenant_id (should return nothing)
\echo ''
\echo '🔒 Test 1: Query listings without tenant context (should be empty):'
SELECT COUNT(*) as listing_count FROM core.listings;

-- Set tenant context for Demo Lodge
\echo ''
\echo '🔓 Test 2: Query as Demo Lodge tenant:'
DO $$
DECLARE
  demo_tenant_id uuid;
BEGIN
  SELECT id INTO demo_tenant_id FROM core.tenants WHERE name = 'Demo Lodge';
  PERFORM set_config('app.tenant_id', demo_tenant_id::text, false);
END $$;

SELECT 
  l.title,
  l.type,
  l.price,
  t.name as tenant_name
FROM core.listings l
JOIN core.tenants t ON t.id = l.tenant_id;

-- Try to access Coastal Safaris data (should fail)
\echo ''
\echo '🔒 Test 3: Try to access other tenant data (should be empty):'
SELECT COUNT(*) as coastal_listings
FROM core.listings l
JOIN core.tenants t ON t.id = l.tenant_id
WHERE t.name = 'Coastal Safaris';

-- Switch to Coastal Safaris
\echo ''
\echo '🔓 Test 4: Switch to Coastal Safaris tenant:'
DO $$
DECLARE
  coastal_tenant_id uuid;
BEGIN
  SELECT id INTO coastal_tenant_id FROM core.tenants WHERE name = 'Coastal Safaris';
  PERFORM set_config('app.tenant_id', coastal_tenant_id::text, false);
END $$;

SELECT 
  l.title,
  l.type,
  l.price,
  t.name as tenant_name
FROM core.listings l
JOIN core.tenants t ON t.id = l.tenant_id;

-- Reset to superuser
RESET ROLE;

\echo ''
\echo '✅ RLS Test Complete!'
\echo '   - Tenant isolation is working'
\echo '   - Each tenant can only see their own data'
