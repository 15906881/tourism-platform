-- Ensure test account exists
INSERT INTO core.accounts (id, email) 
VALUES ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'test@example.com')
ON CONFLICT (email) DO NOTHING;

-- Ensure test tenant exists
INSERT INTO core.tenants (id, name) 
VALUES ('11111111-1111-1111-1111-111111111111', 'Test Hotel')
ON CONFLICT (name) DO NOTHING;

-- Link account to tenant via membership
INSERT INTO core.memberships (account_id, tenant_id, role)
VALUES ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'admin')
ON CONFLICT (account_id, tenant_id) DO NOTHING;

-- Verify
SELECT 'Tenants:' as check;
SELECT id, name FROM core.tenants;

SELECT 'Accounts:' as check;
SELECT id, email FROM core.accounts;

SELECT 'Memberships:' as check;
SELECT account_id, tenant_id, role FROM core.memberships;
