-- Enforce RLS on tenant-scoped memberships (idempotent)
-- Uses the same GUC pattern as core.current_tenant() / app.tenant_id.

-- Make sure the table exists (created in 0005)
-- Enable + force RLS
ALTER TABLE core.memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE core.memberships FORCE ROW LEVEL SECURITY;

-- Recreate policies safely
DROP POLICY IF EXISTS mship_select ON core.memberships;
CREATE POLICY mship_select ON core.memberships
  FOR SELECT
  USING (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);

DROP POLICY IF EXISTS mship_modify ON core.memberships;
CREATE POLICY mship_modify ON core.memberships
  FOR ALL
  USING (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
