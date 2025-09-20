-- Tenant-level enable/override of templates
CREATE TABLE IF NOT EXISTS core.tenant_templates (
  tenant_id   uuid NOT NULL REFERENCES core.tenants(id)   ON DELETE CASCADE,
  template_id uuid NOT NULL REFERENCES core.templates(id) ON DELETE CASCADE,
  enabled     boolean NOT NULL DEFAULT true,
  overrides   jsonb   NOT NULL DEFAULT '{}'::jsonb,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tenant_id, template_id)
);

-- RLS (enforce tenant isolation)
ALTER TABLE core.tenant_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.tenant_templates FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS tt_select ON core.tenant_templates;
CREATE POLICY tt_select ON core.tenant_templates
  FOR SELECT
  USING (
    tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
  );

DROP POLICY IF EXISTS tt_modify ON core.tenant_templates;
CREATE POLICY tt_modify ON core.tenant_templates
  FOR ALL
  USING (
    tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
  )
  WITH CHECK (
    tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
  );
