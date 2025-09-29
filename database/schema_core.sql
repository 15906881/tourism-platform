-- =====================================================
-- Weblynk Platform - Initial Schema Migration
-- Phase 1: Domain Model & Multitenancy
-- =====================================================

-- Enable extensions
create extension if not exists "pgcrypto";  -- for gen_random_uuid()
create extension if not exists "citext";    -- for case-insensitive email

-- =====================================================
-- Plans (create first - no dependencies)
-- =====================================================
create table plans (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  features_json jsonb not null default '{}'::jsonb,
  price_cents integer not null default 0,
  interval text not null default 'monthly' check (interval in ('monthly', 'yearly')),
  created_at timestamptz not null default now()
);

-- =====================================================
-- Tenants
-- =====================================================
create table tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'), -- DNS-safe slugs
  status text not null default 'active' check (status in ('active', 'suspended', 'deleted')),
  plan_id uuid references plans(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- Users
-- =====================================================
create table users (
  id uuid primary key default gen_random_uuid(),
  email citext unique not null,
  name text,
  status text not null default 'active' check (status in ('active', 'suspended', 'deleted')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- User <-> Tenant (roles)
-- =====================================================
create table user_memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  tenant_id uuid not null references tenants(id) on delete cascade,
  roles text[] not null default array['member']::text[]
    check (
      roles <@ array['owner','admin','member']::text[]
      and array_length(roles,1) >= 1
    ),
  created_at timestamptz not null default now(),
  unique (user_id, tenant_id)
);

-- =====================================================
-- Listings
-- =====================================================
create table listings (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  title text not null,
  slug text not null check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  summary text,
  primary_media_id uuid, -- FK added after media table
  module text check (module in ('hotel', 'salon', 'tour', 'restaurant')),
  module_payload jsonb, -- validated by module schema
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, slug)
);

-- =====================================================
-- Media
-- =====================================================
create table media (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  url text not null,
  mime text not null,
  width int,
  height int,
  created_at timestamptz not null default now()
);

-- Add FK for listings.primary_media_id (after media exists)
alter table listings 
  add constraint fk_listings_primary_media 
  foreign key (primary_media_id) references media(id) on delete set null;

-- =====================================================
-- Leads
-- =====================================================
create table leads (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  listing_id uuid references listings(id) on delete set null,
  source text not null check (source in ('web', 'marketing', 'api')),
  status text not null default 'new' check (status in ('new', 'open', 'won', 'lost')),
  payload_json jsonb not null, -- { name, email, message, phone, ... }
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- =====================================================
-- Audit log
-- =====================================================
create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete set null,
  actor_user_id uuid references users(id) on delete set null,
  action text not null, -- 'listing.create', 'lead.update', ...
  entity text,          -- 'listing','lead','tenant'
  entity_id uuid,
  diff_json jsonb,
  created_at timestamptz not null default now()
);

-- =====================================================
-- Indexes (performance)
-- =====================================================

-- Tenants
create index idx_tenants_slug on tenants(slug);
create index idx_tenants_status on tenants(status);

-- Users
create index idx_users_email on users(email);

-- User memberships
create index idx_user_memberships_tenant on user_memberships(tenant_id);
create index idx_user_memberships_user on user_memberships(user_id);
create index idx_memberships_roles_gin on user_memberships using gin (roles);

-- Listings
create index idx_listings_tenant_status on listings(tenant_id, status);
create index idx_listings_tenant_slug on listings(tenant_id, slug);
create index idx_listings_module on listings(module) where module is not null;
create index idx_listings_updated_desc on listings(tenant_id, updated_at desc);

-- Media
create index idx_media_tenant on media(tenant_id);

-- Leads
create index idx_leads_tenant_status_created on leads(tenant_id, status, created_at desc);
create index idx_leads_listing on leads(listing_id) where listing_id is not null;

-- Audit logs
create index idx_audit_tenant_created on audit_logs(tenant_id, created_at desc);
create index idx_audit_actor on audit_logs(actor_user_id) where actor_user_id is not null;

-- =====================================================
-- Functions: updated_at trigger
-- =====================================================
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Apply updated_at triggers
create trigger set_updated_at before update on tenants
  for each row execute function update_updated_at_column();

create trigger set_updated_at before update on users
  for each row execute function update_updated_at_column();

create trigger set_updated_at before update on listings
  for each row execute function update_updated_at_column();

create trigger set_updated_at before update on leads
  for each row execute function update_updated_at_column();

-- =====================================================
-- Multitenancy Guardrails
-- =====================================================

-- 1) Same-tenant guard: listings.primary_media_id must match tenant
create or replace function ensure_same_tenant_listing_media()
returns trigger as $$
declare media_t uuid;
begin
  if new.primary_media_id is null then
    return new;
  end if;
  select tenant_id into media_t from media where id = new.primary_media_id;
  if media_t is distinct from new.tenant_id then
    raise exception 'primary_media_id must belong to the same tenant';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_listing_media_tenant_check
before insert or update on listings
for each row execute function ensure_same_tenant_listing_media();

-- 2) Same-tenant guard: leads.listing_id must match lead.tenant_id
create or replace function ensure_same_tenant_lead_listing()
returns trigger as $$
declare listing_t uuid;
begin
  if new.listing_id is null then
    return new;
  end if;
  select tenant_id into listing_t from listings where id = new.listing_id;
  if listing_t is distinct from new.tenant_id then
    raise exception 'lead.listing_id must belong to the same tenant';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_lead_listing_tenant_check
before insert or update on leads
for each row execute function ensure_same_tenant_lead_listing();

-- =====================================================
-- Row-Level Security (RLS)
-- =====================================================

-- Enable RLS on tenant-scoped tables
alter table listings enable row level security;
alter table leads enable row level security;
alter table media enable row level security;
alter table user_memberships enable row level security;

-- Policy: only rows for the current tenant (set via app.jwt_tenant_id)
create policy rls_listings_tenant on listings
  using (tenant_id::text = current_setting('app.jwt_tenant_id', true))
  with check (tenant_id::text = current_setting('app.jwt_tenant_id', true));

create policy rls_leads_tenant on leads
  using (tenant_id::text = current_setting('app.jwt_tenant_id', true))
  with check (tenant_id::text = current_setting('app.jwt_tenant_id', true));

create policy rls_media_tenant on media
  using (tenant_id::text = current_setting('app.jwt_tenant_id', true))
  with check (tenant_id::text = current_setting('app.jwt_tenant_id', true));

create policy rls_memberships_tenant on user_memberships
  using (tenant_id::text = current_setting('app.jwt_tenant_id', true))
  with check (tenant_id::text = current_setting('app.jwt_tenant_id', true));

-- =====================================================
-- Seed: Default plans
-- =====================================================
insert into plans (code, name, features_json, price_cents, interval) values
  ('free', 'Free', '{"listings": 3, "leads": 100, "media_gb": 1}', 0, 'monthly'),
  ('starter', 'Starter', '{"listings": 10, "leads": 1000, "media_gb": 10}', 2900, 'monthly'),
  ('pro', 'Pro', '{"listings": 50, "leads": 10000, "media_gb": 50}', 9900, 'monthly');

-- =====================================================
-- Phase 1 Task #1 Status: ✅ COMPLETE
-- Backend must set: SET LOCAL app.jwt_tenant_id = '<uuid>';
-- =====================================================
