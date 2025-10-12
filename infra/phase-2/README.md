# Phase 2 — App Layer (ALB + ECS)
This folder deploys an ALB and an ECS Fargate service in **us-east-1**, wired to a
Secrets Manager path (`/tourism-platform/prod/app-db-url`). Health checks are
bootstrapped to `/health` so it works without a DB; switch to `/ready` after DB exists.

