-- Idempotent security setup for app role + privileges + RLS
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'tp_user') THEN
    CREATE ROLE tp_user LOGIN PASSWORD 'tp_password';
  END IF;
END $$;

-- Restrict public access and grant only what we need
REVOKE ALL ON SCHEMA core FROM PUBLIC;
GRANT USAGE ON SCHEMA core TO tp_user;

-- Current and future tables in schema 'core'
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA core TO tp_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA core
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO tp_user;

-- Make sure RLS is on and enforced
ALTER TABLE core.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.users FORCE ROW LEVEL SECURITY;
