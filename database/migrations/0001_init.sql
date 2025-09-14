-- 0001_init.sql — Phase-1 skeleton
-- Multi-tenant layout and RLS stubs (no destructive ops).

CREATE SCHEMA IF NOT EXISTS core;

CREATE TABLE IF NOT EXISTS core.tenants (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS core.users (
  id uuid PRIMARY KEY,
  tenant_id uuid REFERENCES core.tenants(id),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE core.users ENABLE ROW LEVEL SECURITY;
-- TODO: add RLS policies to isolate by tenant_id
