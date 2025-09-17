# Tourism Website Platform — Technical Architecture (V4, Ship‑Ready)

**Status:** Production‑ready for Phase 1 launch — all risk windows closed  
**Last updated:** 2025-09-14

## Core Principles & Standards

### Development Standards

- **Code Quality:** ESLint + Prettier, 90%+ test coverage
- **Performance:** <3s load time, 95+ Lighthouse score
- **Security:** OWASP Top 10 compliance, automated security scanning
- **Scalability:** Horizontal scaling, microservices architecture
- **Reliability:** 99.9% uptime, comprehensive monitoring

### Technology Philosophy

- **Modern Stack:** Latest stable versions, TypeScript throughout
- **Cloud‑Native:** Containerized, auto‑scaling, multi‑region
- **API‑First:** RESTful APIs, comprehensive documentation
- **Mobile‑First:** Progressive Web App (PWA) capabilities
- **Multi‑Tenant:** Single codebase, isolated customer data

---

## System Architecture

### Production‑Ready V4 Architecture

#### Bulletproof Multi‑Tenant Database

```sql
-- Every table has RLS enabled + tenant isolation
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Composite uniques prevent tenant data overlap
ALTER TABLE websites ADD CONSTRAINT unique_tenant_name
UNIQUE (tenant_id, name);

-- Separate policies per operation
CREATE POLICY tenant_websites_select ON websites FOR SELECT
USING (tenant_id = current_setting('app.current_tenant')::uuid);

CREATE POLICY tenant_websites_insert ON websites FOR INSERT
WITH CHECK (tenant_id = current_setting('app.current_tenant')::uuid);
```

#### Immutable Payment Event Sourcing

```sql
-- Audit trail for all payment events
CREATE TABLE payment_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    payment_id UUID NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    psp_name VARCHAR(50) NOT NULL,
    psp_response JSONB,
    signature_verified BOOLEAN DEFAULT FALSE,
    amount_cents INTEGER,
    currency VARCHAR(3),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Never delete, only append events
CREATE INDEX idx_payment_events_payment_id ON payment_events(payment_id);
CREATE INDEX idx_payment_events_tenant ON payment_events(tenant_id, created_at);
```

#### Atomic Publishing with Full Audit Trail

```sql
CREATE TABLE publish_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    site_id UUID NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'queued',
    version_hash VARCHAR(64) NOT NULL,
    idempotency_key VARCHAR(64) UNIQUE NOT NULL,
    bundle_url TEXT,
    health_check_passed BOOLEAN,
    rollback_reason TEXT,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### Enterprise Authentication & Authorization

```ts
interface ProductionAuthSession {
  sessionId: string;
  tenantId: string;
  userId: string;
  deviceFingerprint: string;
  ipAddress: string;
  userAgent: string;
  keyId: string; // Cookie signing key rotation
  mfaVerified: boolean;
  stepUpRequired: boolean; // Sensitive operations
  lastActivity: Date;
  emergencyRevoked: boolean; // Global kill switch
  expiresAt: Date;
}
```

#### Production Monitoring & Observability

```yaml
SLO_TARGETS:
  admin_dashboard_p95_ttfb: 400ms
  site_publishing_p95: 15s
  api_response_p99: 500ms
  system_uptime: 99.9%
  payment_success_rate: 95%
  sms_delivery_rate: 95%

ERROR_BUDGETS:
  admin_errors: 0.5% (2 hours/month)
  api_errors: 1.0% (7 hours/month)
  publishing_failures: 0.1% (45 minutes/month)
```

#### Cost Control & Circuit Breakers

```ts
interface SpendLimits {
  sms_monthly_cap: 50; // USD
  image_transforms_hourly: 100;
  publishes_hourly: 10;
  storage_per_tenant: 1000; // MB
  bandwidth_daily: 10; // GB
}

interface CircuitBreakerPolicy {
  warning_threshold: 0.8; // 80% of limit
  rate_limit_threshold: 0.9; // 90% of limit
  circuit_open_threshold: 1.0; // 100% of limit
}
```

---

## Final Production‑Ready V4 Architecture — All Risks Closed

### Complete Account Lifecycle Management

```sql
-- Tenant deletion with audit trail
CREATE TABLE tenant_erasure_requests (
    tenant_id UUID PRIMARY KEY,
    requested_at TIMESTAMP NOT NULL,
    completed_at TIMESTAMP,
    verification_hash VARCHAR(64), -- Proof of complete wipe
    components JSONB DEFAULT '{
        "database": "pending",
        "s3Objects": "pending",
        "logs": "pending",
        "cdnCache": "pending",
        "searchIndex": "pending"
    }'::jsonb,
    sla_deadline TIMESTAMP GENERATED ALWAYS AS (requested_at + INTERVAL '30 days') STORED
);

-- Automated dunning with graduated enforcement
CREATE TYPE account_status AS ENUM ('active', 'grace', 'soft_disabled', 'hard_disabled', 'suspended');
ALTER TABLE tenants ADD COLUMN account_status account_status DEFAULT 'active';
ALTER TABLE tenants ADD COLUMN grace_period_ends TIMESTAMP;
```

### Enterprise Feature Flag Management

```ts
interface FeatureFlag {
  name: string;
  enabled: boolean;
  regions: ("africa" | "eu")[];
  riskLevel: "low" | "medium" | "high";
  approvedBy: string;
  enabledAt: Date;
  rollbackPlan: string;
}

const APPROVAL_MATRIX = {
  low: "engineering_lead",
  medium: "cto_plus_legal",
  high: "ceo_plus_board",
};
```

### Multi‑Region Disaster Recovery

```yaml
primary_region: "af-south-1" # AWS Cape Town
dr_region: "eu-central-1" # AWS Frankfurt
replication: "async_15min"
failover: "manual_4hr_rto"
legal_framework: "dpa_cross_border_clause"

cost_optimization:
  cloudflare_cdn: "global_edge_cache"
  s3_egress_budget: "$500_month"
  private_buckets_only: true
  signed_access_urls: "1hour_expiry"
```

### Bulletproof Schema Discipline

```yaml
# CI Schema Linter Rules
required_for_tenant_tables:
  - tenant_id_column: "UUID NOT NULL"
  - rls_enabled: true
  - tenant_policies: ["SELECT", "INSERT", "UPDATE", "DELETE"]
  - composite_unique: "(tenant_id, business_key)"
  - raw_sql_blocked: "require_dal_wrapper"

migration_rules:
  - backward_compatible: "required"
  - roll_forward_only: "required"
  - drift_detection: "daily_terraform_plan"
```

### Production Payment Reconciliation

```ts
interface PaymentReconciliation {
  psp: string;
  date: Date;
  expectedCount: number;
  actualCount: number;
  discrepancies: PaymentDiscrepancy[];
  reconciled: boolean;
  manualReviewRequired: boolean;
}

const MOBILE_MONEY_POLICY = {
  failoverWindow: "5minutes",
  lateCallbackWindow: "48hours",
  lateCallbackAction: "credit_to_account", // Never double-charge
  reconciliationFrequency: "daily",
  auditRetention: "7years",
};
```

### Enterprise Observability

```yaml
slo_monitoring:
  admin_p95_ttfb: 400ms
  publish_p95: 15s
  api_p99: 500ms
  uptime: 99.9%

error_budgets:
  admin_errors: 0.5% # 2 hours/month
  api_errors: 1.0% # 7 hours/month
  publish_failures: 0.1% # 45 minutes/month

deployment_gates:
  block_deploy_if_budget_below: 10%

on_call:
  primary: "technical_founder"
  secondary: "senior_devops_contractor"
  escalation: "15min → 1hr → ceo"
  runbooks: "gitbook_versioned_quarterly_tested"
```

### Complete Data Residency Compliance

```ts
interface DataResidencyCompliance {
  tenant_region: "africa" | "eu";
  database: "same_region";
  object_storage: "same_region_private_buckets";
  logs_metrics: "same_region_sentry_grafana";
  backups: "same_region_encrypted";
  access_logs: "linked_to_tenant_for_audit";
  cdn_cache: "global_with_regional_origin";
  erasure_sla: "30_days_with_verification";
}
```

### Final Security Hardening

```ts
const SECRETS_ROTATION = {
  cookieSigningKeys: "monthly_automatic",
  databasePasswords: "quarterly_automatic",
  apiKeys: "on_breach_immediate",
  kmsKeys: "annually_with_canary_tests",
  emergencyRotation: "under_60_seconds_global",
};

const STEP_UP_AUTH_REQUIRED = [
  "domain_changes",
  "payment_method_updates",
  "owner_role_changes",
  "account_deletion",
  "data_export",
];
```

**Final Status:** All risk windows closed — production ready for Phase 1 launch.

---

## Technology Stack

### Frontend

- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Radix UI + custom components
- Zustand + React Query
- React Hook Form + Zod
- Editor: Custom drag‑drop builder (Webflow‑inspired)

### Backend

- Node.js 20+ LTS, Express (TS)
- REST + GraphQL (complex queries)
- JWT + refresh tokens
- File upload: S3‑compatible (DigitalOcean Spaces)
- Email: Resend/SendGrid
- Queues: Bull + Redis

### Database

- PostgreSQL 15+ (multi‑tenant with schema isolation)
- Redis 7+ (session, cache, queues)
- Search: ElasticSearch/Algolia
- File storage: S3‑compatible object storage

### Infrastructure

- Hosting: DigitalOcean or AWS
- Docker + Docker Compose; Swarm/Kubernetes as scale grows
- Cloudflare CDN
- Monitoring: Prometheus + Grafana / Sentry
- CI/CD: GitHub Actions

---

## Database Design

### Multi‑Tenant Architecture

```sql
-- Core tenant isolation with African compliance
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain VARCHAR(255) UNIQUE NOT NULL, -- client.sites.platform.com
    custom_domain VARCHAR(255), -- optional client.com
    plan VARCHAR(50) NOT NULL DEFAULT 'basic',
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    legal_country VARCHAR(3) NOT NULL, -- KE, NG, ZA, GH, UG
    billing_currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    tax_scheme VARCHAR(50), -- kenya_vat, nigeria_vat, sa_vat
    data_region VARCHAR(20) NOT NULL DEFAULT 'africa', -- africa, eu
    notification_preferences JSONB DEFAULT '{"sms": true, "whatsapp": true, "email": false}',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
-- User management
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'owner',
    created_at TIMESTAMP DEFAULT NOW()
);
-- Website configuration
CREATE TABLE websites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    template_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    settings JSONB DEFAULT '{}',
    content JSONB DEFAULT '{}',
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
-- Template system
CREATE TABLE templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    preview_url VARCHAR(500),
    config JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
-- Payment tracking
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL,
    current_period_start TIMESTAMP NOT NULL,
    current_period_end TIMESTAMP NOT NULL,
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Design

### RESTful API Structure

```
/api/v1
├── /auth
│   ├── POST /login
│   ├── POST /register
│   ├── POST /refresh
│   └── POST /logout
├── /websites
│   ├── GET / (list user websites)
│   ├── POST / (create new website)
│   ├── GET /:id (get website details)
│   ├── PUT /:id (update website)
│   ├── POST /:id/publish
│   └── DELETE /:id
├── /templates
│   ├── GET / (list available templates)
│   ├── GET /:id (get template details)
│   └── GET /categories
├── /media
│   ├── POST /upload (upload images/files)
│   ├── GET / (list user media)
│   └── DELETE /:id
├── /billing
│   ├── GET /subscription
│   ├── POST /subscription
│   └── POST /webhook
└── /analytics
    ├── GET /traffic
    └── GET /performance
```

**Standards:** Bearer JWT; 100 req/min per user; cursor pagination; standardized error model; Joi/Zod validation; Swagger/OpenAPI docs.

---

## Visual Website Builder

### Component‑Based Architecture

```ts
interface WebsiteComponent {
  id: string;
  type: "hero" | "gallery" | "contact" | "booking" | "testimonials";
  props: Record<string, any>;
  children?: WebsiteComponent[];
  styles: {
    desktop: CSSProperties;
    tablet: CSSProperties;
    mobile: CSSProperties;
  };
}

interface Template {
  id: string;
  name: string;
  category: string;
  components: WebsiteComponent[];
  globalStyles: {
    colors: ColorPalette;
    typography: TypographyConfig;
    spacing: SpacingConfig;
  };
}
```

**Editor Features:** Drag & drop, live preview, responsive modes, auto image optimization, inline content editing, style controls.

---

## Deployment Strategy

### Environment Setup

```yaml
# docker-compose.yml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: tourism_platform
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Scaling Strategy

- **Phase 1 (0–1K users):** Single droplet + Docker Compose
- **Phase 2 (1K–10K):** Separate DB server, Redis cluster
- **Phase 3 (10K+):** Kubernetes + microservices split
- **Phase 4:** Multi‑region + edge

---

## Security & Compliance

### Security Measures

- MFA (optional), RBAC, AES‑256 at rest, TLS 1.3 in transit
- Strict input validation, SQL injection prevention
- API rate limiting, Cloudflare DDoS
- Security headers (HSTS, CSP, X‑Frame‑Options)
- Automated dependency scans

### Data Privacy

- GDPR alignment; tenant isolation
- Automated daily backups (30‑day retention)
- Audit logging for user actions

---

## Monitoring & Analytics

- Sentry for errors, APM for performance
- Prometheus + Grafana dashboards, structured logs
- Uptime monitoring (Pingdom/UptimeRobot)
- Metrics: traffic, conversions, response times, churn, adoption

---

## Development Workflow

```json
{{
  "scripts": {{
    "dev": "next dev",
    "build": "next build",
    "test": "jest",
    "test:e2e": "playwright test",
    "lint": "eslint . --fix",
    "type-check": "tsc --noEmit"
  }}
}}
```

**Pipeline:** push → tests → lint/typecheck → security scan → build → deploy → smoke tests.  
**Testing:** Jest/RTL (90%+), Supertest, Playwright, Artillery, OWASP ZAP.

---

## Cost Optimization

- **Infra (initial):** ~$45–65/mo → scales to ~$200/mo @ 1k customers
- **Optimizations:** WebP + lazyload, code‑splitting, DB indexing/pooling, Redis caching, gzip

> This architecture scales from 100 → 100k+ customers while maintaining performance and cost efficiency.
