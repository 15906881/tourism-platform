-- Create app_service role for API server
DO $$ BEGIN
  CREATE ROLE app_service NOINHERIT;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 1. Revoke all existing privileges on audit_logs
REVOKE ALL ON TABLE core.audit_logs FROM PUBLIC;
REVOKE ALL ON TABLE core.audit_logs FROM app_user;
REVOKE ALL ON TABLE core.audit_logs FROM tp_user;
REVOKE ALL ON TABLE core.audit_logs FROM app_ro;
REVOKE ALL ON TABLE core.audit_logs FROM app_rw;

-- 2. Grant minimal privileges
GRANT SELECT ON core.audit_logs TO app_ro;           -- read-only reporting
GRANT SELECT, INSERT ON core.audit_logs TO app_service; -- API server only
GRANT SELECT ON core.audit_logs TO platform_admin;   -- admin can read all

-- 3. Remove the overly-broad policy
DROP POLICY IF EXISTS p_admin_all ON core.audit_logs;
DROP POLICY IF EXISTS p_tenant_select ON core.audit_logs;

-- 4. Create role-specific policies

-- Tenants (via app_ro or app_service) see only their own logs
CREATE POLICY p_tenant_select ON core.audit_logs
  FOR SELECT
  TO app_ro, app_service
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- API can insert only for current tenant
CREATE POLICY p_app_insert ON core.audit_logs
  FOR INSERT
  TO app_service
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- Platform admins see everything
CREATE POLICY p_admin_select_all ON core.audit_logs
  FOR SELECT
  TO platform_admin
  USING (true);

-- 5. Add composite index for tenant+time queries
CREATE INDEX IF NOT EXISTS audit_logs_tenant_created_idx
  ON core.audit_logs (tenant_id, created_at DESC);

-- 6. Verify final state
SELECT 
  tablename,
  policyname,
  CASE 
    WHEN roles = '{app_ro,app_service}' THEN 'app_ro, app_service'
    WHEN roles = '{app_service}' THEN 'app_service'
    WHEN roles = '{platform_admin}' THEN 'platform_admin'
    ELSE array_to_string(roles, ', ')
  END as applies_to,
  cmd
FROM pg_policies
WHERE schemaname = 'core' AND tablename = 'audit_logs'
ORDER BY policyname;
