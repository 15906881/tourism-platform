-- Prerequisites
CREATE SCHEMA IF NOT EXISTS core;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Listings table with improvements
CREATE TABLE IF NOT EXISTS core.listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES core.tenants(id) ON DELETE CASCADE,
  
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  
  type TEXT NOT NULL DEFAULT 'service',
  category TEXT,
  
  price DECIMAL(10, 2),
  currency TEXT DEFAULT 'USD',
  
  duration_minutes INTEGER,
  capacity INTEGER,
  is_bookable BOOLEAN DEFAULT true,
  
  featured_image_id UUID,
  
  metadata JSONB DEFAULT '{}',
  
  status TEXT DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  UNIQUE(tenant_id, slug),
  CONSTRAINT listings_price_nonneg CHECK (price IS NULL OR price >= 0),
  CONSTRAINT listings_currency_iso CHECK (char_length(currency) = 3 AND currency = upper(currency)),
  CONSTRAINT listings_status_enum CHECK (status IN ('draft','published','archived')),
  CONSTRAINT listings_type_known CHECK (type IN ('service','room','property','menu_item','practice_area'))
);

CREATE INDEX IF NOT EXISTS listings_tenant_id_idx ON core.listings(tenant_id);
CREATE INDEX IF NOT EXISTS listings_type_idx ON core.listings(type);
CREATE INDEX IF NOT EXISTS listings_status_idx ON core.listings(status);
CREATE INDEX IF NOT EXISTS listings_tenant_type_idx ON core.listings(tenant_id, type);
CREATE UNIQUE INDEX IF NOT EXISTS listings_tenant_slug_ci ON core.listings(tenant_id, lower(slug));
CREATE INDEX IF NOT EXISTS listings_metadata_gin ON core.listings USING gin (metadata);

ALTER TABLE core.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.listings FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS listings_tenant_isolation ON core.listings;
CREATE POLICY listings_tenant_isolation ON core.listings
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

GRANT SELECT, INSERT, UPDATE, DELETE ON core.listings TO app_user;

CREATE OR REPLACE FUNCTION core.update_listings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS listings_updated_at_trigger ON core.listings;
CREATE TRIGGER listings_updated_at_trigger
  BEFORE UPDATE ON core.listings
  FOR EACH ROW
  EXECUTE FUNCTION core.update_listings_updated_at();
