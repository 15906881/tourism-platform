/docs/playbooks/incident_api_outage.md
# Incident Response Playbook: API Outage

**Last Reviewed:** YYYY-MM-DD  
**Owner:** SRE Lead  

---

## 1. Detection
- CloudWatch alarm: `ALB 5xx > 1%`
- Synthetic check: `/health` fails > 2 min
- Customer reports in support channel

## 2. Initial Triage
- Confirm issue in **ALB target health** + **ECS service events**
- Run:  
  ```bash
  aws ecs describe-services --cluster tourism-platform-cluster --services tourism-platform-svc

3. Mitigation

Scale tasks manually to stabilize:

aws ecs update-service --cluster tourism-platform-cluster --service tourism-platform-svc --desired-count 4


Roll back to known-good digest if needed (see rollback runbook).

4. Escalation

Tier 1: On-call engineer

Tier 2: API service owner

Tier 3: Incident Commander (Ops Lead)

5. Post-Incident

File RCA in /docs/rca/YYYY-MM-DD_api_outage.md

Review in weekly ops sync


---

### `/docs/runbooks/rollback_ecs_service.md`
```markdown
# Runbook: ECS Service Rollback

**Last Tested:** YYYY-MM-DD  
**Owner:** Ops Team  

---

## Purpose
Return the API service to a stable, known-good image when a deploy causes issues.

## Prerequisites
- Known-good digest (pinned SHA256 from ECR)
- IAM permissions to update ECS task definitions

## Procedure
1. Save the good digest:
   ```bash
   GOOD=sha256:<digest>


Generate rollback task definition:

aws ecs describe-task-definition --task-definition tourism-platform:latest > /tmp/td.json
jq --arg d "$GOOD" '.taskDefinition
  | .containerDefinitions[0].image = "247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-platform/api@" + $d
  | del(.taskDefinitionArn,.revision,.status,.registeredAt,.registeredBy)
' /tmp/td.json > /tmp/td-rollback.json


Register rollback task definition:

aws ecs register-task-definition --cli-input-json file:///tmp/td-rollback.json


Update service:

aws ecs update-service --cluster tourism-platform-cluster --service tourism-platform-svc \
  --task-definition tourism-platform --force-new-deployment

Validation

Confirm new tasks are healthy

Verify /health returns 200

Monitor ALB target group for stability


---

### `/docs/oncall/roster.md`
```markdown
# On-Call Assignments & Escalation Paths

**Last Updated:** YYYY-MM-DD  
**Owner:** Ops Lead  

---

## Weekly Rotation
- **Primary:** Engineer A (YYYY-MM-DD → YYYY-MM-DD)
- **Secondary:** Engineer B
- **Escalation Manager:** Engineer C

Roster is synced with Google Calendar + PagerDuty.

---

## Escalation Policy
- **Tier 1:** Primary on-call — respond within 15 min
- **Tier 2:** Secondary — if Tier 1 does not respond in 15 min
- **Tier 3:** Escalation Manager — assume Incident Commander role

---

## Communication Channels
- Alerts: PagerDuty + Slack `#infra-alerts`
- War Room: Slack `#incident-war-room`
- Escalation calls: Zoom bridge [link here]
