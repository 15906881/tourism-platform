# Tourism Platform — Architecture Decisions & Issue Plan (v1)

**Date:** September 20, 2025
**Owner:** Sade / Eng
**Purpose:** Single source of truth for platform architecture decisions and a copy‑pasteable backlog (GitHub issues) ordered by dependencies.

---

## Executive Summary

Secure cloud/data foundation is complete (VPC, Bastion/SSM, private RDS Postgres, SGs, Secrets). DB is least‑privilege with an `app` schema, and developer UX is standardized via repo‑local scripts. Remaining scope focuses on: migrations governance + RLS multi‑tenancy core; domain model & API contracts; backend skeleton with caching/rate‑limits; design system & app shell; 20 UI templates in three waves; and ops/quality (monitoring, CI/CD, backups, hardening). MVP ETA: **\~3–4 weeks (best)** / **\~5–8 weeks (worst)** depending on design/API clarity and review cycles. Key risks: contracts churn, lack of migrations, secrets drift, and limited ops visibility until alarms are live.

---

## Architecture Decisions (ADR‑Series)

> Status: ✅ = Implemented, 🟨 = Planned/Proposed

### ADR‑001 — Tenant Isolation & Data Model — 🟨

* **Decision:** Shared database with `tenant_id` + Postgres **RLS** on tenant‑scoped tables. Premium tier upgrade path to dedicated DB.
* **Implications:** Strong logical isolation, single operational surface; ability to shard/partition by tenant later.
* **Next:** Create `tenant` table; session var `app.current_tenant`; RLS policies on `app.*`.

### ADR‑002 — Tenant Lifecycle (Provision/Offboard) — 🟨

* **Decision:** Automated job/CLI to create tenant row, default settings/themes, domains, and seed content; offboarding = export + soft delete + purge.
* **Next:** Implement `provision_tenant` + `export_tenant` scripts.

### ADR‑003 — Tenant Customization — 🟨

* **Decision:** JSONB `tenant_settings` (branding, flags, custom fields). Feature flags/entitlements in DB.
* **Next:** Add settings schema; theming assets pipeline.

### ADR‑004 — Backups & Recovery — 🟨

* **Decision:** Platform PITR; **per‑tenant logical exports** scheduled or on demand; restore runbook tested quarterly.
* **Next:** Export job + drill.

### ADR‑005 — Service Shape — 🟨

* **Decision:** **Modular monolith** (Bookings, Catalog, Auth modules). Extract services only if/when needed.
* **Next:** Backend skeleton with module boundaries.

### ADR‑006 — Rendering Strategy — 🟨

* **Decision:** **Hybrid SSR/CSR** (e.g., Next.js): SSR for SEO content pages; CSR for app flows.
* **Next:** Choose FE stack; set SSR/ISR policy.

### ADR‑007 — Caching — 🟨

* **Decision:** CDN for assets; Redis for tenant/template fragments; cache‑bust on publish.
* **Next:** Add Redis; key scheme `tenant:{id}:ver:{n}:tpl:{key}`.

### ADR‑008 — Domains — 🟨

* **Decision:** `tenant.example.com` via wildcard DNS + custom domains with automated certs (ACME/ACM).
* **Next:** Wildcard DNS; custom domain verification endpoint + cert flow.

### ADR‑009 — AuthN/AuthZ — 🟨

* **Decision:** Multi‑tenant OIDC broker + per‑tenant IdPs; JWT with `tenant_id`; RBAC/ABAC.
* **Next:** Define roles/claims; middleware enforcing tenant context.

### ADR‑010 — Cross‑Tenant Isolation — 🟨

* **Decision:** Enforce **RLS**; all DB access requires tenant context; disallow cross‑tenant joins.
* **Next:** RLS DDL + unit tests.

### ADR‑011 — Compliance — 🟨

* **Decision:** GDPR baseline; PCI if payments added; audit tables and DSR processes.
* **Next:** Data map + retention windows; audit log schema.

### ADR‑012 — Rate Limiting — 🟨

* **Decision:** Per‑tenant sliding window at gateway (Envoy/Nginx/API‑GW) backed by Redis.
* **Next:** Limiter middleware + quotas.

### ADR‑013 — Template Model — 🟨

* **Decision:** Shared base templates + tenant overrides; slots/partials; safe sandbox for limited custom code.
* **Next:** Template schema + rendering pipeline.

### ADR‑014 — Content Model — 🟨

* **Decision:** Headless CMS tables **scoped by tenant**; platform‑wide content flagged global.
* **Next:** Create CMS tables with nullable `tenant_id` for globals.

### ADR‑015 — Template Versioning — 🟨

* **Decision:** Immutable versions, per‑tenant pin/upgrade, controlled rollouts.
* **Next:** `template_version` tables; publish/pin APIs.

### ADR‑016 — Monitoring — 🟨

* **Decision:** Tenant‑tagged logs/metrics; per‑tenant SLOs; outlier alerts.
* **Next:** Logging/metrics with tenant labels; dashboards.

### ADR‑017 — Deploy Strategy — 🟨

* **Decision:** Blue/green or canary; feature flags; migration pre‑checks.
* **Next:** CI/CD pipelines + pre‑deploy checks.

### ADR‑018 — Live Migrations — 🟨

* **Decision:** Additive‑first, online migrations; batched backfills; rollback plan.
* **Next:** Introduce Flyway/Sqitch; policy doc.

### ADR‑019 — Billing & Gating — 🟨

* **Decision:** Stripe subscriptions + metered usage; entitlements in DB; flags per plan.
* **Next:** Event schema + webhook handlers.

### ADR‑020 — Analytics — 🟨

* **Decision:** Event pipeline (FE/BE) tagged by tenant; per‑tenant dashboards/exports.
* **Next:** Define event schema; dashboard tool pick.

---

## Current Status (Roll‑Up)

* **✅ Done:** VPC/Networking, Bastion/SSM, RDS Postgres (private), SG 5432, Secrets (admin/app/report), DB bootstrap (schema/roles/RLS‑ready), repo‑local scripts.
* **🟨 In Progress (\~70%):** Docs/Makefile commit.
* **🟨 Planned (0% implemented):** ADR‑001…ADR‑020 feature work; backend skeleton; design system; 20 UI templates.

---

## Dependency‑Ordered Roadmap

### Now (Critical Path)

1. **Migrations + RLS core** (ADR‑001, ‑010, ‑018)
2. **Domain model + API contracts** (Catalog, Booking, Auth)
3. **Backend skeleton** (Config from Secrets, `/health`, stubs; Redis + rate limit)
4. **Auth baseline** (OIDC broker, JWT with `tenant_id`, roles)

### Next

5. **Design system & app shell** (tokens, base components, routing, error/loading/empty)
6. **Wave A templates:** Home, Destinations List/Detail, Booking steps, Error/Empty/Loading
7. **Tenant domains:** wildcard subdomains + custom domain verification

### Then

8. **Wire BE ↔ DB** (replace mocks; cache fragments; invalidation)
9. **Monitoring & dashboards** (tenant tags)
10. **Backups & drills** (PITR; per‑tenant exports; restore runbook)

### Later

11. **Wave B templates:** Experiences/Packages list/detail + minimal Auth routes
12. **Billing & entitlements** (Stripe; plan gates)
13. **CI/CD** (blue/green; pre‑deploy checks)

### Optional / As Needed

14. **Wave C templates:** Account, Support, CMS Pages, Search, Blog/News, Light Admin
15. **Analytics** (events + dashboards)
16. **Security hardening:** `rds.force_ssl=1`, rotations synced to Secrets, (opt) RDS Proxy

---

## Milestones & Rough Timeline

* **M1 — Foundations locked:** migrations + RLS + contracts + backend skeleton + DS/shell (**1–1.5 wks / 2–3 wks**)
* **M2 — Wave A complete & wired:** (**+1–1.5 wks / +2–3 wks**)
* **M3 — Wave B + minimal Auth:** (**+1–1.5 wks / +2–3 wks**)
* **M4 — Ops/CI/CD/hardening + Wave C (as needed):** (**+1–1.5 wks / +2–3 wks**)
  **Total to MVP:** \~3–4 weeks best / \~5–8 weeks worst.

---

## Risks & Mitigations

* **API/contracts churn:** Lock OpenAPI first; mock endpoints before wiring UI.
* **No migrations:** Add tool + CI gate now; write migration policy.
* **Secrets drift:** Rotation playbook (`ALTER USER` → `put-secret-value` → deploy).
* **Ops visibility:** Add alarms & error tracking before launch.
* **Auth ambiguity:** Decide if MVP requires login; gate routes accordingly.

---

## 20 Launch UI Templates — Waves & Tracking

**Wave A (Core conversion path)**

1. Home / Landing
2. Destinations List / Search
3. Destination Detail
4. Booking – Step 1
5. Booking – Step 2
6. Booking – Confirmation
7. Error / Empty / Loading (system‑wide)

**Wave B (Catalog depth + minimal Auth)**
4\. Experiences/Attractions List
5\. Experience/Attraction Detail
6\. Packages/Tours List
7\. Package/Tour Detail
12\. Auth – Sign in / Sign up

**Wave C (Account, Support, Content)**
13\. Account – Dashboard
14\. Account – Booking Detail
18\. Support – Contact/Help
15\. CMS Page (About/Terms/Privacy)
11\. Global Search
16\. Blog/News List
17\. Article Detail
20\. Light Admin – Products (internal)

---

## GitHub Issues (Copy‑Paste Ready)

> Create these in your repo. Use labels like: `area:be`, `area:fe`, `area:ops`, `tenant`, `security`, `ui:template`, `wave:A/B/C`, `priority:P0/P1`, `status:blocked`.

### Top‑Level Tracker

**Issue:** Project Tracker — MVP to Launch
**Body (checklist):**

* [ ] M1: Migrations+RLS+Contracts+Skeleton+DS/Shell
* [ ] M2: Wave A complete & wired
* [ ] M3: Wave B + minimal Auth
* [ ] M4: Ops/CI/CD/Hardening + Wave C

### Foundations & Governance

1. **Adopt Migrations + RLS Core**
   **Labels:** `area:be`, `tenant`, `priority:P0`
   **Checklist:**

* [ ] Introduce Flyway/Sqitch; add `/migrations` folder
* [ ] Baseline current `app` schema
* [ ] Create `tenant` table; set `app.current_tenant`
* [ ] Add RLS policies on tenant‑scoped tables
* [ ] CI gate: migrations must apply cleanly on fresh DB
  **Acceptance:** Fresh DB can be brought to head with one command; RLS tests pass.

2. **Domain Model & OpenAPI Contracts (Catalog/Booking/Auth)**
   **Labels:** `area:be`, `priority:P0`
   **Checklist:**

* [ ] Define entities & relationships
* [ ] Publish OpenAPI (YAML/JSON)
* [ ] Mock server available for UI
  **Acceptance:** Contracts reviewed/approved; mock endpoints return realistic payloads.

3. **Backend Skeleton + Config + Rate Limiting**
   **Labels:** `area:be`, `priority:P0`
   **Checklist:**

* [ ] Service bootstrap; config from Secrets
* [ ] `/health` endpoint
* [ ] Redis wired; tenant‑aware rate limit middleware
* [ ] Stub endpoints per OpenAPI
  **Acceptance:** CI green; `GET /destinations` returns mocked data.

4. **Auth Baseline (OIDC, JWT w/ tenant\_id, RBAC)**
   **Labels:** `security`, `area:be`, `tenant`, `priority:P1`
   **Checklist:**

* [ ] Choose broker / IdP strategy
* [ ] JWT claims incl. `tenant_id`, roles
* [ ] Middleware to enforce tenant context
  **Acceptance:** Protected route requires valid token & tenant.

### UI Foundation

5. **Design System & App Shell (Next.js hybrid)**
   **Labels:** `area:fe`, `priority:P0`
   **Checklist:**

* [ ] Tokens (color/spacing/typography)
* [ ] Base components (Button, Input, Card, Modal)
* [ ] Routing & layout (header/footer)
* [ ] Global error/loading/empty states
  **Acceptance:** Storybook or component gallery renders; shell routes load.

### UI Templates — Wave A (one issue per template)

6. **UI Template (Wave A): Home / Landing**
   **Labels:** `ui:template`, `wave:A`, `area:fe`, `priority:P0`
   **Checklist:** wireframes → SSR page → load/empty/error → a11y/perf → API wiring.

7. **UI Template (Wave A): Destinations List / Search**
   **Labels:** `ui:template`, `wave:A`, `area:fe`, `priority:P0`
   **Checklist:** filters/sort + pagination; states; SSR+CSR hybrid.

8. **UI Template (Wave A): Destination Detail**
   **Labels:** `ui:template`, `wave:A`, `area:fe`, `priority:P0`
   **Checklist:** sections, map placeholder, CTAs; SEO meta.

9. **UI Template (Wave A): Booking — Step 1**

10. **UI Template (Wave A): Booking — Step 2**

11. **UI Template (Wave A): Booking — Confirmation**

12. **UI System (Wave A): Error / Empty / Loading** (sitewide components)

> Repeat pattern for each with acceptance criteria.

### UI Templates — Wave B

13. **Experiences/Attractions List**
14. **Experience/Attraction Detail**
15. **Packages/Tours List**
16. **Package/Tour Detail**
17. **Auth — Sign in / Sign up**

### UI Templates — Wave C

18. **Account — Dashboard**
19. **Account — Booking Detail**
20. **Support — Contact/Help**
21. **CMS Page (About/Terms/Privacy)**
22. **Global Search**
23. **Blog/News List**
24. **Article Detail**
25. **Light Admin — Products (internal)**

### Ops & Quality

26. **Monitoring & Dashboards (tenant‑tagged)**
27. **Backups & Drills (PITR + per‑tenant exports)**
28. **CI/CD (blue/green or canary; pre‑deploy checks)**
29. **Security Hardening (`rds.force_ssl=1`, rotations, opt RDS Proxy)**

### Business & Analytics

30. **Billing & Entitlements (Stripe + metered usage)**
31. **Analytics Pipeline & Dashboards (tenant)**

> **Acceptance Criteria template** — include for each issue:
>
> 1. Dependencies met; 2) Unit/e2e & a11y checks pass; 3) Perf/LCP within budget; 4) Docs updated; 5) Feature flags (if any) default safe.

---

## Optional: Quick‑create Issues with GitHub CLI

> Run at repo root with `gh` authenticated. Adjust labels as needed.

```bash
# bin/create-issues.sh (excerpt)
#!/usr/bin/env bash
set -euo pipefail
mk() { gh issue create --title "$1" --labels "$2" --body "$3"; }

mk "Project Tracker — MVP to Launch" "project,tracking" $'- [ ] M1: Migrations+RLS+Contracts+Skeleton+DS/Shell\n- [ ] M2: Wave A complete & wired\n- [ ] M3: Wave B + minimal Auth\n- [ ] M4: Ops/CI/CD/Hardening + Wave C'

mk "Adopt Migrations + RLS Core" "area:be,tenant,priority:P0" $'- [ ] Introduce Flyway/Sqitch\n- [ ] Baseline app schema\n- [ ] Tenant table + session var\n- [ ] RLS policies\n- [ ] CI gate'

mk "Domain Model & OpenAPI Contracts" "area:be,priority:P0" $'- [ ] Entities defined\n- [ ] OpenAPI published\n- [ ] Mock server ready'

mk "Backend Skeleton + Config + Rate Limiting" "area:be,priority:P0" $'- [ ] Bootstrap + Secrets config\n- [ ] /health\n- [ ] Redis + rate limit\n- [ ] Stub endpoints'

mk "Design System & App Shell (Next.js)" "area:fe,priority:P0" $'- [ ] Tokens\n- [ ] Base components\n- [ ] Layout/routing\n- [ ] Error/loading/empty'

# Wave A templates loop (example names)
declare -a waveA=(
  "UI Template (Wave A): Home / Landing"
  "UI Template (Wave A): Destinations List / Search"
  "UI Template (Wave A): Destination Detail"
  "UI Template (Wave A): Booking — Step 1"
  "UI Template (Wave A): Booking — Step 2"
  "UI Template (Wave A): Booking — Confirmation"
  "UI System (Wave A): Error / Empty / Loading"
)
for t in "${waveA[@]}"; do
  mk "$t" "ui:template,wave:A,area:fe,priority:P0" $'- [ ] Wireframes approved\n- [ ] Implement (SSR/CSR as applicable)\n- [ ] Loading/empty/error\n- [ ] A11y/perf\n- [ ] API wiring (mock→real)';
done
```

---

## How to Use This Doc

* Add to repo as `docs/architecture-and-issues.md` (or split: `/docs/ADR-001.md` + `/docs/roadmap.md`).
* Create issues via GitHub UI or the CLI snippet above.
* Keep ADR decisions and the dependency‑ordered roadmap current after each planning session.
