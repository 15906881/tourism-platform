-- Explicitly revoke ALL first, then grant only what's needed

-- accounts: READ ONLY for app_user
REVOKE ALL ON TABLE core.accounts FROM app_user;
GRANT SELECT ON core.accounts TO app_user;

-- tenants: READ ONLY for app_user  
REVOKE ALL ON TABLE core.tenants FROM app_user;
GRANT SELECT ON core.tenants TO app_user;

-- templates: already correct (READ ONLY)
REVOKE ALL ON TABLE core.templates FROM app_user;
GRANT SELECT ON core.templates TO app_user;

-- audit_logs: already correct (INSERT + SELECT)
-- (no changes needed)

-- Verify final state
SELECT 
  table_schema, 
  table_name,
  grantee,
  string_agg(privilege_type, ', ' ORDER BY privilege_type) as privileges
FROM information_schema.table_privileges
WHERE table_schema = 'core' 
  AND grantee IN ('app_user', 'tp_user')
  AND table_name IN ('accounts', 'tenants', 'templates', 'audit_logs')
GROUP BY table_schema, table_name, grantee
ORDER BY table_name, grantee;
