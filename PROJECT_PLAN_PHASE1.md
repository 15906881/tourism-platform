# Phase 1 — Plan-Once Execution Checklist

## 0. Repo & Governance

- [x] Initialize repo and push initial docs (v0.1.0)
- [ ] Protect `main` (require PRs; no direct pushes) — _Dep:_ none
- [ ] Add CODEOWNERS (reviewers: Architecture, UX, Dev) — _Dep:_ main protection

## 1. Documentation Finalization

- [ ] Technical Architecture v4 — final pass & sign-off — _Dep:_ none
- [ ] System Architecture V4 — finalize diagrams/flows — _Dep:_ Tech Arch
- [ ] Onboarding User Journey v1 — UX acceptance — _Dep:_ Sys Arch
- [ ] Photos Entry Screen v1 — UX acceptance — _Dep:_ Onboarding Journey

## 2. Delivery Plan (Plan-Once)

- [ ] Define scope-of-work & milestones for Phase 1 — _Dep:_ docs finalized
- [ ] Create implementation issues from each deliverable — _Dep:_ SOW
- [ ] Sequence issues with dependencies (Backlog → Ready → In Progress) — _Dep:_ issues created

## 3. CI/Quality Rails

- [ ] Add linters/formatting config (ESLint/Prettier where applicable) — _Dep:_ none
- [ ] Add basic CI (lint/docs build) — _Dep:_ linters in repo

## 4. Release Management

- [ ] Tag v0.1.1 after final doc sign-off — _Dep:_ docs finalized
- [ ] Changelog entry for v0.1.1 — _Dep:_ v0.1.1

> Status legend: ☐ = open, ☑ = done
