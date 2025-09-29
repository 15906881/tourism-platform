# Tourism Platform — Docs

This repo contains Phase 1 stabilization artifacts. They describe the **current** state (no ECS/ALB/RDS yet) and lock the secret policy and health contract for Phase 2.

- `docs/phase-1/Inventory.md` — Live inventory (final)
- `docs/phase-1/Secrets_Policy.md` — Canonical secret paths & access model
- `docs/phase-1/Health_Endpoints_Contract.md` — Liveness/readiness spec
- `docs/phase-1/Phase_1_Signoff.md` — Completion checklist
- `ops/CHANGELOG.md` — Log any config changes
- # Tourism Platform — Docs

This repo contains engineering documentation for the Tourism Platform.

- **Phase 1**: stabilization artifacts (historical baseline)
- **Operations**: enterprise-grade playbooks, runbooks, on-call, and DR documentation

---

## Phase 1 (Historical Baseline)
These describe the **current** state at the time of Phase-1 (pre-ECS/ALB/RDS) and lock the secret policy & health contract for Phase-2.

- `docs/phase-1/Inventory.md` — Live inventory (final)
- `docs/phase-1/Secrets_Policy.md` — Canonical secret paths & access model
- `docs/phase-1/Health_Endpoints_Contract.md` — Liveness/readiness spec
- `docs/phase-1/Phase_1_Signoff.md` — Completion checklist
- `ops/CHANGELOG.md` — Log of any config changes

---

## Operations (Current)
Operational docs used by on-call and audits.

### Playbooks
- **API Outage** → [`docs/playbooks/incident_api_outage.md`](./playbooks/incident_api_outage.md)

### Runbooks
- **ECS Service Rollback** → [`docs/runbooks/rollback_ecs_service.md`](./runbooks/rollback_ecs_service.md)

### On-Call
- **Roster & Escalation Paths** → [`docs/oncall/roster.md`](./oncall/roster.md)

### Disaster Recovery
- **RTO/RPO Matrix** → [`docs/dr/rto_rpo_matrix.md`](./dr/rto_rpo_matrix.md)  
- **Recovery Testing Schedule** → [`docs/dr/recovery_testing_schedule.md`](./dr/recovery_testing_schedule.md)

---

## Governance
- **Owners** are listed at the top of each document.
- **Review cadence**
  - Playbooks/Runbooks/On-Call: **quarterly** or after material changes
  - DR (RTO/RPO + Testing): **semi-annual**; full DR drill **annual**
- **Change control**: all edits via PR with at least one Ops/SRE reviewer.

---

## Quick Links
- Production API: `https://api.weblynk.app`
- ALB/ECS dashboards: CloudWatch (link in runbooks/playbooks)
- Incident channel: Slack `#incident-war-room`
