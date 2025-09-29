# RTO/RPO Matrix

**Last Reviewed:** YYYY-MM-DD  
**Owner:** Disaster Recovery Lead  

---

## Purpose
This document defines the **Recovery Time Objective (RTO)** and **Recovery Point Objective (RPO)** for all critical components of the tourism platform. It ensures consistent expectations for recovery and is used during disaster recovery planning, audits, and incident response.

---

## Definitions
- **RTO (Recovery Time Objective):** Maximum tolerable downtime before service impact is unacceptable.
- **RPO (Recovery Point Objective):** Maximum tolerable data loss measured in time.

---

## RTO/RPO by Component

| Component         | RTO (Recovery Time Objective) | RPO (Recovery Point Objective) | Notes |
|-------------------|-------------------------------|--------------------------------|-------|
| **API Layer (ECS)** | 15 minutes                   | 0 minutes                      | Stateless; rollback to pinned image digest. |
| **Database (PostgreSQL)** | 1 hour                | 5 minutes                      | PITR enabled; daily snapshots retained 30 days. |
| **DNS / Networking** | 30 minutes                 | 0 minutes                      | Route53 failover with multiple ALB endpoints. |
| **Logging / Monitoring** | 2 hours                | 1 hour                         | Logs persisted in S3; CloudWatch 30-day retention. |
| **CI/CD Pipeline** | 4 hours                      | 0 minutes                      | Rebuilds possible from GitHub Actions + ECR images. |

---

## Review & Governance
- **Review Cycle:** Semi-annual or after major infrastructure changes.  
- **Approval:** Ops Lead + Platform Owner.  
- **Storage:** Version controlled in GitHub (`/docs/dr/rto_rpo_matrix.md`).  
- **Audit:** Confirmed during annual compliance audit.  

---

## Change Log
- YYYY-MM-DD — Initial draft created.  
- YYYY-MM-DD — Updated after migration to ECS Fargate v10.  
