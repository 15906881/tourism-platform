-- 1. Lock down accounts table (read-only for app_user)
REVOKE ALL ON TABLE core.accounts FROM PUBLIC;
GRANT SELECT ON core.accounts TO app_user;

-- 2. Lock down tenants table (read-only for app_user)
REVOKE ALL ON TABLE core.tenants FROM PUBLIC;
GRANT SELECT ON core.tenants TO app_user;

-- 3. Lock down templates (read-only for app_user)
REVOKE ALL ON TABLE core.templates FROM PUBLIC;
GRANT SELECT ON core.templates TO app_user;

-- 4. Enable RLS on audit_logs with tenant-scoped + admin policies
ALTER TABLE core.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.audit_logs FORCE ROW LEVEL SECURITY;

-- Tenants see only their own logs
DROP POLICY IF EXISTS p_tenant_select ON core.audit_logs;
CREATE POLICY p_tenant_select ON core.audit_logs
  FOR SELECT
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- Platform admins see everything
DO $$ BEGIN
  CREATE ROLE platform_admin NOINHERIT;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DROP POLICY IF EXISTS p_admin_all ON core.audit_logs;
CREATE POLICY p_admin_all ON core.audit_logs
  FOR ALL
  TO platform_admin
  USING (true)
  WITH CHECK (true);

-- Restrict audit_logs writes (INSERT only, no UPDATE/DELETE)
REVOKE UPDATE, DELETE ON core.audit_logs FROM app_user;
GRANT INSERT, SELECT ON core.audit_logs TO app_user;

-- 5. Verify GRANTs (fixed query)
SELECT 
  table_schema, 
  table_name,
  string_agg(privilege_type, ', ' ORDER BY privilege_type) as privileges
FROM information_schema.table_privileges
WHERE table_schema = 'core' 
  AND grantee = 'app_user'
  AND table_name IN ('accounts', 'tenants', 'templates', 'audit_logs')
GROUP BY table_schema, table_name
ORDER BY table_name;
