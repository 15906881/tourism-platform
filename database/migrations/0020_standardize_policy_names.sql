-- Standardize all RLS policy names to p_tenant

-- listings (already has listings_tenant_isolation, rename to p_tenant)
DROP POLICY IF EXISTS listings_tenant_isolation ON core.listings;
CREATE POLICY p_tenant ON core.listings
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- media (already has media_tenant_isolation)
DROP POLICY IF EXISTS media_tenant_isolation ON core.media;
CREATE POLICY p_tenant ON core.media
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- leads (already has leads_tenant_isolation)
DROP POLICY IF EXISTS leads_tenant_isolation ON core.leads;
CREATE POLICY p_tenant ON core.leads
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- sites (has sites_modify + sites_select, consolidate)
DROP POLICY IF EXISTS sites_modify ON core.sites;
DROP POLICY IF EXISTS sites_select ON core.sites;
CREATE POLICY p_tenant ON core.sites
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- memberships (has mship_modify + mship_select)
DROP POLICY IF EXISTS mship_modify ON core.memberships;
DROP POLICY IF EXISTS mship_select ON core.memberships;
CREATE POLICY p_tenant ON core.memberships
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- tenant_templates (has tt_modify + tt_select)
DROP POLICY IF EXISTS tt_modify ON core.tenant_templates;
DROP POLICY IF EXISTS tt_select ON core.tenant_templates;
CREATE POLICY p_tenant ON core.tenant_templates
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- users (uses core.current_tenant() function - keep but rename)
DROP POLICY IF EXISTS users_isolated ON core.users;
CREATE POLICY p_tenant ON core.users
  USING (tenant_id = core.current_tenant())
  WITH CHECK (tenant_id = core.current_tenant());

-- pages (inherits via FK to sites, keep subquery logic but rename)
DROP POLICY IF EXISTS pages_modify ON core.pages;
DROP POLICY IF EXISTS pages_select ON core.pages;
CREATE POLICY p_tenant ON core.pages
  USING (
    EXISTS (SELECT 1 FROM core.sites s 
            WHERE s.id = pages.site_id 
              AND s.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM core.sites s 
            WHERE s.id = pages.site_id 
              AND s.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  );

-- hello (demo table, keep as-is or drop later)
DROP POLICY IF EXISTS hello_tenant_modify ON core.hello;
DROP POLICY IF EXISTS hello_tenant_select ON core.hello;
CREATE POLICY p_tenant ON core.hello
  USING (current_setting('app.tenant_id', true) IS NOT NULL)
  WITH CHECK (current_setting('app.tenant_id', true) IS NOT NULL);

-- listing_media already has p_tenant (keep as-is)

-- Verify
SELECT schemaname, tablename, policyname, cmd
FROM pg_policies
WHERE schemaname = 'core'
ORDER BY tablename, policyname;
