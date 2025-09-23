
# Phase 2 — Terraform Skeleton

This folder contains a ready-to-extend Terraform setup for the tourism platform in **us-east-1**. It:
- Creates an **ALB (HTTP, dev)** and target group with health checks on `/ready`
- Creates an **ECS Fargate** cluster, task definition, and service
- Wires the task to **Secrets Manager** (`/tourism-platform/prod/app-db-url`) as `APP_DB_URL`
- Optionally can create an **RDS PostgreSQL** instance in private subnets (toggle `create_db`)

> HTTPS/ACM and secret rotation can be added next. The DB is optional and off by default to avoid storing credentials.

## Structure
```
environments/prod/
  main.tf
  variables.tf
  terraform.tfvars.example
modules/
  alb/
  ecs_service/
  rds_postgres/
```

## After apply
- Set the **value** for `/tourism-platform/prod/app-db-url` in Secrets Manager.
- Point DNS (later) to the ALB DNS name output if you choose to add HTTPS/ACM.

## Notes
- Do **not** commit real secrets. Paths and ARNs are safe; values are not.
- State backend is local by default (for simplicity). Switch to S3/Dynamo lock when ready.
