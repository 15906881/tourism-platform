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
