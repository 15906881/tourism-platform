CREATE TABLE IF NOT EXISTS core.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES core.tenants(id) ON DELETE CASCADE,
  
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  
  s3_key TEXT NOT NULL,
  s3_bucket TEXT NOT NULL,
  cloudfront_url TEXT,
  
  width INTEGER,
  height INTEGER,
  
  alt_text TEXT,
  caption TEXT,
  metadata JSONB DEFAULT '{}',
  
  uploaded_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  UNIQUE(tenant_id, s3_key)
);

CREATE INDEX IF NOT EXISTS media_tenant_id_idx ON core.media(tenant_id);
CREATE INDEX IF NOT EXISTS media_mime_type_idx ON core.media(mime_type);
CREATE INDEX IF NOT EXISTS media_created_at_idx ON core.media(created_at DESC);

ALTER TABLE core.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.media FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS media_tenant_isolation ON core.media;
CREATE POLICY media_tenant_isolation ON core.media
  USING (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid);

GRANT SELECT, INSERT, UPDATE, DELETE ON core.media TO app_user;

ALTER TABLE core.listings 
  ADD CONSTRAINT listings_featured_image_fkey 
  FOREIGN KEY (featured_image_id) 
  REFERENCES core.media(id) 
  ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS listings_featured_image_idx ON core.listings(featured_image_id);
