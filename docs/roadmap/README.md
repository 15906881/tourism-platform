# Tourism Platform — Roadmap v1 (Tasks 1–75)

**Owner:** Platform Team  
**Status:** Draft v1  
**Artifact:** [Download the PPTX](./Tourism_Platform_Roadmap_V1.pptx)

> Use the checkboxes to track progress. Keep items atomic and PR-linked.

---

## 1) Infra foundation (1–10)
1. Confirm AWS account, region, tagging baseline (`env`, `app`, `owner`).
2. Lock provider versions in `.terraform.lock.hcl` and `required_providers`.
3. Standardize Terraform layout: `environments/` and `modules/` with README.
4. Enable remote state backend (S3 + DynamoDB lock).
5. Define core VPC inputs or reuse shared VPC; document CIDRs.
6. Validate public/private subnets + route tables across AZs.
7. Create/verify NAT Gateway(s) for private subnets.
8. Security groups baseline: ALB SG, service SG, DB SG.
9. Shared KMS keys plan for Secrets, RDS snapshots, logs.
10. Tag enforcement policy (pre-commit hook or CI check).

## 2) Networking & Security (11–20)
11. Route53 hosted zone: register or delegate domain.
12. ACM cert for `app.<domain>` in region of ALB.
13. ALB module: listener 80→target group; prepare 443 (future).
14. ALB SG: allow 80/443 from `0.0.0.0/0`; egress all.
15. Service SG: allow app port from ALB SG only; egress all.
16. DB SG: allow 5432 from Service SG only.
17. SSM Session Manager baseline (no bastion).
18. IAM boundaries for CI/CD deploy role.
19. Least-privilege task roles: execution vs. task.
20. Guardrails: AWS Config baseline & basic conformance packs (plan).

## 3) Compute & Containerization (21–30)
21. ECS cluster (Fargate) per env.
22. Task definition: CPU/mem, ports, healthcheck, awslogs.
23. Service: 1–2 AZs, private subnets, attach target group.
24. Service autoscaling scaffolding (CPU/Memory policies) – disabled until load test.
25. Container image tag convention (`main`, `release-*`, semver).
26. ECR repo lifecycle policy (keep last N).
27. Parameterize health path via var (`/health` → `/ready` post-DB).
28. Rollout strategy: minHealthy=100, max=200 (blue/green later).
29. Exec command enabled for troubleshooting.
30. Document runbook: scale, rollback, exec, log tail.

## 4) CI/CD (31–36)
31. Build pipeline: Docker build, test, tag, push to ECR.
32. Deploy pipeline: Terraform plan/apply with manual approval per env.
33. OIDC for CI → AWS, no long-lived keys.
34. Versioned task defs; pin image digest in deploy step.
35. GitHub branch protection + required checks.
36. Annotate PRs with Terraform plan summary.

## 5) Observability & Ops (37–45)
37. CloudWatch Logs group with 30-day retention.
38. Log correlation fields (trace/span IDs ready).
39. App metrics: expose `/metrics` (Prometheus style) (future).
40. CloudWatch alarms: 5XX on ALB, TargetGroup UnhealthyHostCount > 0.
41. ECS service CPU/Memory high alarms (info level initially).
42. Synthetic health check via Route53 or CW Synthetics (future).
43. Incident comms doc & Slack webhook destination (future).
44. Basic dashboards: ALB 5xx, TG health, service CPU/mem.
45. On-call rotation placeholder (future).

## 6) Data & Secrets (46–52)
46. Secrets Manager: `/tourism-platform/<env>/app-db-url`.
47. Conditional IAM policy for secret read (only when ARN provided).
48. RDS Postgres: param group, storage, backups, maintenance window (plan).
49. DB subnet group (private), multi-AZ (prod).
50. Automated backups + snapshot retention policy.
51. Rotation strategy (app creds vs. IAM auth) (plan).
52. Migration strategy: run migrations step in deploy (plan).

## 7) Reliability (53–60)
53. Healthcheck hardened to `/ready` after DB available.
54. Grace period tuned to app cold-start.
55. Circuit breaker/backoff config (app-level).
56. Task count ≥2 in prod; spread across AZs.
57. Rolling update config documented; failure rollback checklist.
58. DR notes: snapshot + infra-as-code re-provision path.
59. Runbook: secret rotation, ALB cert renewal, fail deploy.
60. Chaos day placeholder (future).

## 8) Performance & Cost (61–66)
61. Fargate size review vs. actual CPU/mem usage post-load test.
62. VPC endpoints for logs/ECR/SSM to reduce NAT costs (plan).
63. ECR retention, log retention trim if needed.
64. Scale-out/in policies thresholds tuned post-load test.
65. Load test baseline (k6/Gatling) with 95p latency targets.
66. Monthly cost report & budgets/alerts.

## 9) Product & App Readiness (67–72)
67. Env parity: dev/stage/prod variable sets & secrets.
68. Feature flags scaffold (config source) (plan).
69. Zero-downtime deploy checklist + smoke tests.
70. API error budget/SLO draft.
71. Security headers via ALB or app (HSTS, XFO, etc.).
72. Public status page (future).

## 10) Documentation & Handover (73–75)
73. `docs/` structure + index (this file).
74. ADR-0001: “ECS Fargate + ALB + Secrets Manager” decision.
75. Handover: “How we deploy” one-pager with links to runbooks.

---

### How to use this file
- Check off items as you complete them.
- When scope changes, open a PR that updates this roadmap and link issues/PRs next to the items.
