-- ================================================
-- STEP 1: ENABLE RLS ON ALL TENANT-SCOPED TABLES
-- ================================================

ALTER TABLE core.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.listing_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.tenant_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.users ENABLE ROW LEVEL SECURITY;

-- subscriptions and hello already enabled
-- accounts, tenants, templates are global (no RLS needed)

\echo '✅ RLS enabled on all tenant-scoped tables'

-- ================================================
-- STEP 2: CREATE APPLICATION ROLES
-- ================================================

-- Drop roles if they exist
DROP ROLE IF EXISTS app_ro;
DROP ROLE IF EXISTS app_service;

-- Read-only role (for analytics, reporting)
CREATE ROLE app_ro WITH LOGIN PASSWORD 'CHANGE_ME_app_ro_prod_password';

-- Service role (for application read/write)
CREATE ROLE app_service WITH LOGIN PASSWORD 'CHANGE_ME_app_service_prod_password';

\echo '✅ Created app_ro and app_service roles'

-- ================================================
-- STEP 3: GRANT SCHEMA ACCESS
-- ================================================

GRANT USAGE ON SCHEMA core TO app_ro, app_service;

-- ================================================
-- STEP 4: GRANT TABLE PERMISSIONS
-- ================================================

-- Read-only: SELECT only
GRANT SELECT ON ALL TABLES IN SCHEMA core TO app_ro;
ALTER DEFAULT PRIVILEGES IN SCHEMA core GRANT SELECT ON TABLES TO app_ro;

-- Service: Full CRUD (SELECT, INSERT, UPDATE, DELETE)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA core TO app_service;
ALTER DEFAULT PRIVILEGES IN SCHEMA core GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_service;

-- Grant sequence usage for auto-increment IDs
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA core TO app_service;
ALTER DEFAULT PRIVILEGES IN SCHEMA core GRANT USAGE, SELECT ON SEQUENCES TO app_service;

\echo '✅ Granted permissions to roles'

-- ================================================
-- STEP 5: BYPASS RLS FOR THESE ROLES
-- ================================================
-- IMPORTANT: Application sets app.tenant_id, so policies work correctly
-- We DON'T want to bypass RLS - remove this if accidentally set:

-- Ensure roles are NOT superuser and DO respect RLS
ALTER ROLE app_ro NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB NOREPLICATION;
ALTER ROLE app_service NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB NOREPLICATION;

\echo '✅ Roles configured to respect RLS policies'

-- ================================================
-- STEP 6: VERIFY SETUP
-- ================================================

SELECT 
  tablename,
  CASE WHEN rowsecurity THEN '✓' ELSE '✗' END as rls_enabled
FROM pg_tables t
JOIN pg_class c ON c.relname = t.tablename
WHERE schemaname = 'core'
  AND tablename NOT IN ('_prisma_migrations', 'accounts', 'tenants', 'templates')
ORDER BY tablename;

\echo ''
\echo '✅ RLS and Roles setup complete!'
\echo ''
\echo '⚠️  IMPORTANT: Change the default passwords!'
\echo '   ALTER ROLE app_ro WITH PASSWORD '\''your-secure-password'\'';'
\echo '   ALTER ROLE app_service WITH PASSWORD '\''your-secure-password'\'';'
