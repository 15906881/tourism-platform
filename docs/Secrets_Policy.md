# Secrets Policy (Phase 1)

**Objective:** Single canonical source for DB connection string; no secrets in code, images, or Terraform state.

## Secrets Manager
- **Prod canonical path:** `/tourism-platform/prod/app-db-url`
- **Dev secret (existing):** ARN `arn:aws:secretsmanager:us-east-1:247006907925:secret:tourism-platform/dev/app-db-url-I97Qvt`
- **Region:** `us-east-1`

## Ownership & Access
- **Owner (write/update):** Project owner
- **Runtime consumers (read):** ECS task role (least-priv: `secretsmanager:GetSecretValue` on the exact ARN/path)
- **CI/CD:** No read to prod secrets by default

## Update Protocol
1. Update secret value in Secrets Manager.
2. Record the change in `/ops/CHANGELOG.md`.
3. Redeploy ECS service (Phase 2 CD) to recycle tasks.

## Rotation (Phase 4)
- Rotate via Secrets Manager + RDS integration (if using managed Postgres/Aurora).

## Non-goals
- No secret values in Git; ARNs/paths are fine.
