-- Helper to enable + enforce RLS and create tenant policies for any table
-- Assumes a UUID tenant column (default 'tenant_id') and core.current_tenant().

create or replace function core.apply_tenant_rls(
  p_table regclass,
  p_tenant_col text default 'tenant_id',
  p_policy_prefix text default 'tenant'
) returns void
language plpgsql
as $$
declare
  v_schema text;
  v_table  text;
  v_sel    text := p_policy_prefix || '_select';
  v_mod    text := p_policy_prefix || '_modify';
begin
  select n.nspname, c.relname into v_schema, v_table
  from pg_class c join pg_namespace n on n.oid = c.relnamespace
  where c.oid = p_table;

  -- Enable and enforce RLS
  execute format('alter table %s enable row level security', p_table);
  execute format('alter table %s force row level security', p_table);

  -- SELECT policy (idempotent)
  if not exists (
    select 1 from pg_policies
    where schemaname = v_schema and tablename = v_table and policyname = v_sel
  ) then
    execute format(
      'create policy %I on %s for select using (
         current_setting(''app.tenant_id'', true) is not null
         and %I::text = current_setting(''app.tenant_id'', true)
       )',
      v_sel, p_table, p_tenant_col
    );
  end if;

  -- ALL (insert/update/delete) policy (idempotent)
  if not exists (
    select 1 from pg_policies
    where schemaname = v_schema and tablename = v_table and policyname = v_mod
  ) then
    execute format(
      'create policy %I on %s for all using (
         current_setting(''app.tenant_id'', true) is not null
         and %I::text = current_setting(''app.tenant_id'', true)
       ) with check (
         current_setting(''app.tenant_id'', true) is not null
         and %I::text = current_setting(''app.tenant_id'', true)
       )',
      v_mod, p_table, p_tenant_col, p_tenant_col
    );
  end if;
end;
$$;
