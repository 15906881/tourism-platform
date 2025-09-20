-- Platform accounts (global identity) + memberships to tenants
create table if not exists core.accounts (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists core.memberships (
  account_id uuid not null references core.accounts(id) on delete cascade,
  tenant_id  uuid not null references core.tenants(id) on delete cascade,
  role       text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (account_id, tenant_id)
);

-- Backfill from existing core.users (you currently have global-unique emails)
insert into core.accounts (email, created_at)
select u.email, coalesce(u.created_at, now())
from core.users u
on conflict (email) do nothing;

insert into core.memberships (account_id, tenant_id, role, created_at)
select a.id, u.tenant_id, u.role, coalesce(u.created_at, now())
from core.users u
join core.accounts a on a.email = u.email
on conflict do nothing;

-- Optional: keep a compatibility view so no code breaks immediately
drop view if exists core.users_v cascade;
create or replace view core.users_v as
select m.tenant_id, a.id as account_id, a.email, m.role, m.created_at
from core.memberships m join core.accounts a on a.id = m.account_id;

-- RLS helper stays the same; tenant isolation remains on data tables via tenant_id.
