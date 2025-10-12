-- Example tenant-scoped table + RLS via helper

create table if not exists core.hello (
  id         uuid primary key default uuid_generate_v4(),
  tenant_id  uuid not null references core.tenants(id),
  msg        text not null,
  created_at timestamptz not null default now()
);

create index if not exists hello_tenant_idx on core.hello(tenant_id);

-- Apply RLS policies (enforced) using the helper
select core.apply_tenant_rls('core.hello'::regclass, 'tenant_id', 'hello_tenant');

-- Seed one demo row for the 'demo' tenant if missing
insert into core.hello (tenant_id, msg)
select t.id, 'hello demo'
from core.tenants t
where t.name = 'demo'
  and not exists (select 1 from core.hello h where h.tenant_id = t.id and h.msg = 'hello demo');
