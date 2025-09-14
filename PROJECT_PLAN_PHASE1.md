# Phase 1 — Plan-Once Execution Checklist

## 0. Repo & Governance
- [x] Initialize repo and push initial docs (v0.1.0)
- [ ] Protect `main` (require PRs; no direct pushes) — *Dep:* none
- [ ] Add CODEOWNERS (reviewers: Architecture, UX, Dev) — *Dep:* main protection

## 1. Documentation Finalization
- [ ] Technical Architecture v4 — final pass & sign-off — *Dep:* none
- [ ] System Architecture V4 — finalize diagrams/flows — *Dep:* Tech Arch
- [ ] Onboarding User Journey v1 — UX acceptance — *Dep:* Sys Arch
- [ ] Photos Entry Screen v1 — UX acceptance — *Dep:* Onboarding Journey

## 2. Delivery Plan (Plan-Once)
- [ ] Define scope-of-work & milestones for Phase 1 — *Dep:* docs finalized
- [ ] Create implementation issues from each deliverable — *Dep:* SOW
- [ ] Sequence issues with dependencies (Backlog → Ready → In Progress) — *Dep:* issues created

## 3. CI/Quality Rails
- [ ] Add linters/formatting config (ESLint/Prettier where applicable) — *Dep:* none
- [ ] Add basic CI (lint/docs build) — *Dep:* linters in repo

## 4. Release Management
- [ ] Tag v0.1.1 after final doc sign-off — *Dep:* docs finalized
- [ ] Changelog entry for v0.1.1 — *Dep:* v0.1.1

> Status legend: ☐ = open, ☑ = done
