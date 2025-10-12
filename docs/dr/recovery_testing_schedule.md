docs/dr/recovery_testing_schedule.md

# Recovery Testing Schedule

**Last Updated:** YYYY-MM-DD  
**Owner:** Ops Lead  

---

## Purpose
This document defines the cadence and scope of disaster recovery (DR) and failover testing for the tourism platform. It ensures recovery objectives (RTO/RPO) are validated and that teams remain operationally ready.

---

## Quarterly Tests
- **ECS Failover Test**  
  - Action: Terminate one ECS task during peak traffic.  
  - Expectation: ALB stays healthy; service auto-scales back to baseline.  
  - RTO Validation: <15 minutes.  

- **Database Snapshot Restore Test**  
  - Action: Restore staging database from the latest production snapshot.  
  - Expectation: Data integrity validated via checksum and smoke tests.  
  - RPO Validation: ≤5 minutes data loss.  

- **DNS Failover Drill**  
  - Action: Switch Route53 record to alternate ALB endpoint.  
  - Expectation: Traffic reroutes with minimal disruption.  
  - RTO Validation: ≤30 minutes.  

---

## Annual Full DR Drill
- **Scenario:** Simulate an Availability Zone outage.  
- **Scope:** API layer, database, DNS, monitoring, logging.  
- **Validation:** Confirm RTO/RPO compliance across all components.  
- **Output:** Formal DR drill report committed to `/docs/dr/tests/YYYY-annual-drill.md`.  

---

## Tracking & Reporting
- **Test Evidence:** Logs, screenshots, and outputs stored under `/docs/dr/tests/`.  
- **Ticketing:** Each test linked to a Jira/ADO ticket with pass/fail outcome.  
- **Audit:** Annual DR drill results submitted for compliance audit.  

---

## Review Cycle
- **Quarterly:** Verify last 3 months of recovery tests completed and documented.  
- **Annually:** Full DR drill with leadership review and sign-off.  
- **After Major Changes:** Trigger out-of-cycle test when infra or architecture changes significantly.  
