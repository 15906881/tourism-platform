-- 0003_tenant_and_fk.sql
-- Creates app.tenant, adds tenant_id to existing tables (hello), backfills, and adds FK.

create extension if not exists pgcrypto;

create table if not exists app.tenant (
  id         uuid primary key default gen_random_uuid(),
  code       text not null unique,
  name       text not null,
  created_at timestamptz not null default now()
);

-- Ensure a default dev tenant exists (safe for local/CI)
insert into app.tenant (id, code, name)
select gen_random_uuid(), 'dev', 'Development'
where not exists (select 1 from app.tenant where code = 'dev');

-- Add tenant_id to app.hello if missing; backfill to 'dev'; then enforce NOT NULL
do $$
begin
  if not exists (
    select 1
    from information_schema.columns
    where table_schema='app' and table_name='hello' and column_name='tenant_id'
  ) then
    alter table app.hello add column tenant_id uuid;
    update app.hello
      set tenant_id = (select id from app.tenant where code='dev')
      where tenant_id is null;
    alter table app.hello alter column tenant_id set not null;
  end if;
end$$;

-- FK + index (idempotent)
do $$
begin
  if not exists (select 1 from pg_constraint where conname='hello_tenant_fk') then
    alter table app.hello
      add constraint hello_tenant_fk
      foreign key (tenant_id) references app.tenant(id);
  end if;
end$$;

create index if not exists hello_tenant_idx on app.hello(tenant_id);
