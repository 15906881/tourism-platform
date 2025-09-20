-- Global template library
CREATE TABLE IF NOT EXISTS core.templates (
  id         uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  key        text NOT NULL UNIQUE,          -- stable identifier, e.g. "landing-basic"
  name       text NOT NULL,                 -- display name
  category   text,                          -- e.g. "landing", "gallery"
  version    int  NOT NULL DEFAULT 1,
  content    jsonb NOT NULL DEFAULT '{}'::jsonb,  -- arbitrary config/structure
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS templates_category_idx ON core.templates (category);

-- Seed a couple of examples (idempotent upsert on "key")
INSERT INTO core.templates(key, name, category, version, content) VALUES
  ('landing-basic', 'Landing (Basic)', 'landing', 1, '{"sections":["hero","features","cta"]}'),
  ('gallery-basic', 'Gallery (Basic)', 'gallery', 1, '{"layout":"grid","columns":3}')
ON CONFLICT (key) DO UPDATE
SET name     = EXCLUDED.name,
    category = EXCLUDED.category,
    version  = GREATEST(core.templates.version, EXCLUDED.version),
    content  = EXCLUDED.content,
    updated_at = now();
