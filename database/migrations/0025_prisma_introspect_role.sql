-- Create introspection role that can bypass RLS for SELECT only
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_introspect') THEN
    CREATE ROLE app_introspect NOLOGIN;
  END IF;
END $$;

-- Allow dbadmin to assume this role
GRANT app_introspect TO dbadmin;

-- Grant SELECT on all RLS-protected tables and add permissive SELECT policy
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT schemaname, tablename
    FROM pg_tables
    WHERE schemaname='core'
      AND tablename IN (
        'hello','leads','listing_media','listings','media',
        'memberships','pages','sites','tenant_templates','users','audit_logs'
      )
  LOOP
    EXECUTE format('GRANT SELECT ON %I.%I TO app_introspect;', r.schemaname, r.tablename);
    EXECUTE format('DROP POLICY IF EXISTS p_introspect_select ON %I.%I;', r.schemaname, r.tablename);
    EXECUTE format('CREATE POLICY p_introspect_select ON %I.%I FOR SELECT TO app_introspect USING (true);', r.schemaname, r.tablename);
  END LOOP;
END $$;

-- Also grant SELECT on non-RLS tables
GRANT SELECT ON core.accounts, core.tenants, core.templates TO app_introspect;

-- Verify
SELECT 
  schemaname, 
  tablename, 
  policyname,
  roles
FROM pg_policies
WHERE schemaname = 'core' 
  AND policyname = 'p_introspect_select'
ORDER BY tablename;
