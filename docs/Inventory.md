# Phase 1 — Live Inventory (FINAL)

**Account / Region**
- Account ID: `247006907925`
- Primary region: `us-east-1`

**Networking (us-east-1)**
- VPC: `vpc-045133bfce986cdad` (10.0.0.0/16)
- Public subnets:
  - `subnet-03b98d781d854d4af` (10.0.0.0/24)
  - `subnet-0f3f904579a9a89d` (10.0.1.0/24)
- Private subnets:
  - `subnet-0fc8039897781b630` (10.0.10.0/24)
  - `subnet-02490a4625a498388` (10.0.11.0/24)

**ECR**
- Repo URI: `247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-api`

**Secrets**
- Dev DB URL secret ARN: `arn:aws:secretsmanager:us-east-1:247006907925:secret:tourism-platform/dev/app-db-url-I97Qvt`
- Canonical prod secret path: `/tourism-platform/prod/app-db-url` (to be created in us-east-1)

**ECS / ALB / RDS (current state)**
- ECS cluster: **NONE**
- ECS service/task definition: **NONE**
- Load balancer: **NONE**
- Database: **NONE**

**Health Contract**
- Liveness: `GET /health` → 200, no external deps
- Readiness: `GET /ready` → 200 only when DB reachable
- Warm-up target: ~30s

**Phase 1 Status:** ✅ Complete — inventory captured, canonical secret chosen, health contract set.
