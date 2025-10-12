CREATE TABLE IF NOT EXISTS core.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES core.tenants(id) ON DELETE CASCADE,
  
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  message TEXT,
  subject TEXT,
  
  source TEXT DEFAULT 'contact_form',
  page_url TEXT,
  referrer TEXT,
  
  listing_id UUID REFERENCES core.listings(id) ON DELETE SET NULL,
  
  status TEXT DEFAULT 'new',
  assigned_to UUID,
  notes TEXT,
  
  metadata JSONB DEFAULT '{}',
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  CONSTRAINT leads_status_enum CHECK (status IN ('new','contacted','qualified','won','lost')),
  CONSTRAINT leads_email_like CHECK (position('@' IN email) > 1)
);

CREATE INDEX IF NOT EXISTS leads_tenant_id_idx ON core.leads(tenant_id);
CREATE INDEX IF NOT EXISTS leads_status_idx ON core.leads(status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON core.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON core.leads(email);
CREATE INDEX IF NOT EXISTS leads_metadata_gin ON core.leads USING gin (metadata);

ALTER TABLE core.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.leads FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS leads_tenant_isolation ON core.leads;
CREATE POLICY leads_tenant_isolation ON core.leads
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

GRANT SELECT, INSERT, UPDATE, DELETE ON core.leads TO app_user;

CREATE OR REPLACE FUNCTION core.update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_updated_at_trigger ON core.leads;
CREATE TRIGGER leads_updated_at_trigger
  BEFORE UPDATE ON core.leads
  FOR EACH ROW
  EXECUTE FUNCTION core.update_leads_updated_at();
