-- 0004_rls_policies.sql
-- Enforce tenant isolation using a session GUC: SET app.tenant_id = '<uuid>';

alter table app.hello enable row level security;
alter table app.hello force row level security;

-- SELECT policy (idempotent)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='app' and tablename='hello' and policyname='hello_select_tenant'
  ) then
    create policy hello_select_tenant on app.hello
      for select
      using (
        current_setting('app.tenant_id', true) is not null
        and tenant_id::text = current_setting('app.tenant_id', true)
      );
  end if;
end$$;

-- INSERT/UPDATE/DELETE policy (idempotent)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname='app' and tablename='hello' and policyname='hello_modify_tenant'
  ) then
    create policy hello_modify_tenant on app.hello
      for all
      using (
        current_setting('app.tenant_id', true) is not null
        and tenant_id::text = current_setting('app.tenant_id', true)
      )
      with check (
        current_setting('app.tenant_id', true) is not null
        and tenant_id::text = current_setting('app.tenant_id', true)
      );
  end if;
end$$;
