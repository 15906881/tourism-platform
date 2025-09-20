-- 0013_sites_pages.sql

-- Sites (per tenant)
CREATE TABLE IF NOT EXISTS core.sites (
  id         uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id  uuid NOT NULL REFERENCES core.tenants(id) ON DELETE CASCADE,
  key        text NOT NULL,  -- short identifier per tenant (e.g., "main")
  name       text NOT NULL,
  domain     text,           -- optional vanity/custom domain
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (tenant_id, key)
);

ALTER TABLE core.sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.sites FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS sites_select ON core.sites;
CREATE POLICY sites_select ON core.sites
  FOR SELECT
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

DROP POLICY IF EXISTS sites_modify ON core.sites;
CREATE POLICY sites_modify ON core.sites
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

-- Pages (belong to a site; reference a template; allow per-page overrides)
CREATE TABLE IF NOT EXISTS core.pages (
  id             uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id        uuid NOT NULL REFERENCES core.sites(id) ON DELETE CASCADE,
  template_id    uuid NOT NULL REFERENCES core.templates(id) ON DELETE RESTRICT,
  slug           text NOT NULL,   -- e.g. "home", "about"
  overrides      jsonb NOT NULL DEFAULT '{}'::jsonb,
  published      boolean NOT NULL DEFAULT false,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (site_id, slug)
);

ALTER TABLE core.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.pages FORCE ROW LEVEL SECURITY;

-- RLS for pages: scope via the site's tenant_id
DROP POLICY IF EXISTS pages_select ON core.pages;
CREATE POLICY pages_select ON core.pages
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
      FROM core.sites s
      WHERE s.id = core.pages.site_id
        AND s.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
    )
  );

DROP POLICY IF EXISTS pages_modify ON core.pages;
CREATE POLICY pages_modify ON core.pages
  FOR ALL
  USING (
    EXISTS (
      SELECT 1
      FROM core.sites s
      WHERE s.id = core.pages.site_id
        AND s.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM core.sites s
      WHERE s.id = core.pages.site_id
        AND s.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
    )
  );

-- Grants for API user
GRANT SELECT, INSERT, UPDATE, DELETE ON core.sites TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON core.pages TO app_user;

-- Keep future tables in core readable/writable by app_user where appropriate
ALTER DEFAULT PRIVILEGES IN SCHEMA core GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_user;
