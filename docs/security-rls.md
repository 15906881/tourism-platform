# Row Level Security (RLS) Setup

## Overview
RLS enforces tenant isolation at the database level. Each tenant can only access their own data.

## Roles

### app_ro (Read-Only)
- Purpose: Analytics, reporting, dashboards
- Permissions: SELECT on all core tables
- RLS: Respects tenant isolation policies

### app_service (Service Account)
- Purpose: Application backend (APIs, services)
- Permissions: SELECT, INSERT, UPDATE, DELETE
- RLS: Respects tenant isolation policies

## How It Works

Applications must set tenant context before queries:
```typescript
await prisma.$executeRaw`SET LOCAL app.tenant_id = ${tenantId}`;
```

## Tables with RLS
- audit_logs, leads, listings, media, sites, subscriptions, users, etc.

## Production Setup
Change default passwords:
```sql
ALTER ROLE app_ro WITH PASSWORD 'secure-password-1';
ALTER ROLE app_service WITH PASSWORD 'secure-password-2';
```

## Testing
```bash
psql -U postgres -d tourism_dev -f scripts/test-rls.sql
```
