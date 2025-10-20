# Read Replicas Strategy

## Current State (Phase 1)
- Single PostgreSQL instance
- All reads/writes go to primary
- Sufficient for <1000 concurrent users

## When to Scale (Triggers)
- [ ] Query latency consistently >200ms
- [ ] Database CPU >70% for >1 hour
- [ ] >1000 concurrent active sessions
- [ ] Read-heavy queries impacting write performance

## Phase 2: Single Read Replica
**Estimated Timeline:** When we hit 500+ concurrent users

### Infrastructure Changes:
```bash
# AWS RDS - Create read replica
aws rds create-db-instance-read-replica \
  --db-instance-identifier tourism-prod-replica-1 \
  --source-db-instance-identifier tourism-prod-primary \
  --db-instance-class db.t3.medium
```

### Code Changes:
```typescript
// packages/db/src/client.ts
export const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
});

export const prismaRead = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_READ_URL || process.env.DATABASE_URL } }
});

// Use prismaRead for queries, prisma for writes
export { prisma as prismaWrite };
```

### Application Updates:
```typescript
// In your API routes
import { prismaRead, prismaWrite } from '@weblynk/db';

// Read operations
const listings = await prismaRead.listings.findMany();

// Write operations  
await prismaWrite.listings.create({ data: {...} });
```

## Phase 3: Multi-Region (Future)
- Multiple read replicas
- Geographic distribution
- Redis caching layer
- CDN for static assets

## Cost Estimates
- Phase 1: $50/month (current)
- Phase 2: $150/month (+$100 for replica)
- Phase 3: $500+/month (multi-region)

## Monitoring Setup
```bash
# CloudWatch alarms to create
- DatabaseConnections > 80% of max
- ReadLatency > 200ms for 5 minutes
- WriteLatency > 100ms for 5 minutes
- CPU > 70% for 1 hour
```
