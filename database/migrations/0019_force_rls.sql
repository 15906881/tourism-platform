-- Force RLS on all tenant-scoped tables (prevents owner bypass)
ALTER TABLE core.listings         FORCE ROW LEVEL SECURITY;
ALTER TABLE core.media            FORCE ROW LEVEL SECURITY;
ALTER TABLE core.leads            FORCE ROW LEVEL SECURITY;
ALTER TABLE core.memberships      FORCE ROW LEVEL SECURITY;
ALTER TABLE core.pages            FORCE ROW LEVEL SECURITY;
ALTER TABLE core.sites            FORCE ROW LEVEL SECURITY;
ALTER TABLE core.tenant_templates FORCE ROW LEVEL SECURITY;
ALTER TABLE core.users            FORCE ROW LEVEL SECURITY;

-- Enable + Force on junction table
ALTER TABLE core.listing_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.listing_media FORCE ROW LEVEL SECURITY;

-- Add RLS policy to listing_media (inherits tenant via FK)
DROP POLICY IF EXISTS p_tenant ON core.listing_media;
CREATE POLICY p_tenant ON core.listing_media
  USING (
    EXISTS (SELECT 1 FROM core.listings l
            WHERE l.id = listing_id
              AND l.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM core.listings l
            WHERE l.id = listing_media.listing_id
              AND l.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  );

-- Verify
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'core'
ORDER BY tablename;
