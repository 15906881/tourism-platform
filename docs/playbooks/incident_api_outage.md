# Incident Response Playbook: API Outage

**Last Reviewed:** YYYY-MM-DD  
**Owner:** SRE Lead  

---

## Purpose
Provide a standardized procedure for identifying, triaging, mitigating, and resolving API outages impacting `api.weblynk.app`. Ensures rapid recovery, consistent communication, and post-incident learning.

---

## 1. Detection
- CloudWatch alarm: `ALB 5xx > 1%`
- Health check: `/health` endpoint fails > 2 minutes
- Synthetic monitor alerts
- Customer report via support channel

---

## 2. Initial Triage
1. Confirm outage via ALB target health:
   ```bash
   aws elbv2 describe-target-health --target-group-arn $TG_ARN --region us-east-1
Check ECS service events:

bash
Copy code
aws ecs describe-services --cluster tourism-platform-cluster \
  --services tourism-platform-svc --region us-east-1
Validate logs:

bash
Copy code
aws logs tail /ecs/tourism-platform --region us-east-1 --since 10m
3. Mitigation
If task count drift is detected, manually scale:

bash
Copy code
aws ecs update-service --cluster tourism-platform-cluster \
  --service tourism-platform-svc --desired-count 4
If image regression suspected, follow ECS Service Rollback Runbook.

If WAF false positive suspected, temporarily disable the blocking rule.

4. Escalation
Tier 1: Primary on-call engineer (PagerDuty alert)

Tier 2: Secondary on-call engineer (if Tier 1 unresponsive within 15 minutes)

Tier 3: Incident Commander (Ops Lead) — responsible for external communication and status updates

5. Post-Incident
Document Root Cause Analysis (RCA) under /docs/rca/YYYY-MM-DD_api_outage.md

Capture timeline: detection, mitigation, resolution, communication

Schedule review in weekly Ops sync

6. Validation
Ensure ALB target health = 100% healthy

Verify /health returns HTTP 200

Confirm CloudWatch alarms reset

Confirm SLO dashboards show recovery within thresholds
