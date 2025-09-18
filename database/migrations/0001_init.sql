create schema if not exists core;
create extension if not exists "uuid-ossp";

create table if not exists core.tenants (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  created_at timestamptz default now()
);

create table if not exists core.users (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid not null references core.tenants(id),
  email text not null unique,
  role text not null default 'member',
  created_at timestamptz default now()
);

alter table core.users enable row level security;

create or replace function core.current_tenant() returns uuid
language sql stable as $$ select nullif(current_setting('app.tenant_id', true), '')::uuid $$;

drop policy if exists users_isolated on core.users;
create policy users_isolated on core.users
  using (tenant_id = core.current_tenant())
  with check (tenant_id = core.current_tenant());

insert into core.tenants (name) values ('demo')
on conflict (name) do nothing;

insert into core.users (tenant_id, email, role)
select id, 'demo@local.test', 'admin' from core.tenants where name = 'demo'
on conflict (email) do nothing;
