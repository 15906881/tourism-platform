#!/usr/bin/env bash
set -euo pipefail

# Requires GitHub CLI (gh) and that you run this from the repo folder locally.
# It will create common labels if missing, then open a set of starter issues.

ensure_label () {
  local name="$1"; local color="${2:-ededed}"; local desc="${3:-}"
  if ! gh label list --limit 200 | cut -f1 | grep -qx "$name"; then
    gh label create "$name" --color "$color" ${desc:+--description "$desc"} >/dev/null
    echo "• label created: $name"
  fi
}

mk () {
  local title="$1"; local labels="$2"; local body="$3"
  gh issue create --title "$title" --labels "$labels" --body "$body" >/dev/null
  echo "• issue created: $title"
}

echo "Checking/creating labels…"
ensure_label "project" "1f883d" "Project tracking"
ensure_label "tracking" "0e8a16" "Meta tracking"
ensure_label "area:be" "0366d6" "Backend"
ensure_label "area:fe" "a2eeef" "Frontend"
ensure_label "tenant" "5319e7" "Multi-tenancy"
ensure_label "security" "d73a4a" "Security/Compliance"
ensure_label "ui:template" "fbca04" "UI page/template"
ensure_label "wave:A" "7057ff" "Wave A"
ensure_label "priority:P0" "b60205" "Highest priority"
ensure_label "priority:P1" "d876e3" "High priority"

echo "Creating tracker issues…"

mk "Project Tracker — MVP to Launch" "project,tracking" $'- [ ] M1: Migrations+RLS+Contracts+Skeleton+DS/Shell
- [ ] M2: Wave A complete & wired
- [ ] M3: Wave B + minimal Auth
- [ ] M4: Ops/CI/CD/Hardening + Wave C'

mk "Adopt Migrations + RLS Core" "area:be,tenant,priority:P0" $'- [ ] Introduce Flyway or Sqitch; add /migrations
- [ ] Baseline current app schema
- [ ] Create tenant table; session var app.current_tenant
- [ ] RLS policies on tenant-scoped tables
- [ ] CI gate: migrations apply on fresh DB'

mk "Domain Model & OpenAPI Contracts (Catalog/Booking/Auth)" "area:be,priority:P0" $'- [ ] Define entities & relationships
- [ ] Publish OpenAPI (YAML/JSON)
- [ ] Mock server available for UI'

mk "Backend Skeleton + Config + Rate Limiting" "area:be,priority:P0" $'- [ ] Bootstrap service; config from Secrets
- [ ] /health endpoint
- [ ] Redis wired; tenant-aware rate limit middleware
- [ ] Stub endpoints per OpenAPI'

mk "Auth Baseline (OIDC, JWT tenant_id, RBAC)" "security,area:be,tenant,priority:P1" $'- [ ] Choose broker/IdP strategy
- [ ] JWT claims incl. tenant_id & roles
- [ ] Middleware enforces tenant context'

mk "Design System & App Shell (Next.js hybrid)" "area:fe,priority:P0" $'- [ ] Tokens (color/spacing/type)
- [ ] Base components (Button, Input, Card, Modal)
- [ ] Routing & layout (header/footer)
- [ ] Global error/loading/empty states'

# Wave A templates
for t in \
  "UI Template (Wave A): Home / Landing" \
  "UI Template (Wave A): Destinations List / Search" \
  "UI Template (Wave A): Destination Detail" \
  "UI Template (Wave A): Booking — Step 1" \
  "UI Template (Wave A): Booking — Step 2" \
  "UI Template (Wave A): Booking — Confirmation" \
  "UI System (Wave A): Error / Empty / Loading"
do
  mk "$t" "ui:template,wave:A,area:fe,priority:P0" $'- [ ] Wireframes approved
- [ ] Implement (SSR/CSR as applicable)
- [ ] Loading/empty/error states
- [ ] A11y/perf checks
- [ ] API wiring (mock → real)'
done

echo "Done. Check the Issues tab."
