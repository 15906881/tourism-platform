# Health Endpoints Contract

**Purpose:** Predictable liveness/readiness for ALB & ECS deployments.

## Endpoints
- **GET /health** (liveness): returns 200; MUST NOT depend on DB or external services; P90 ≤ 50ms.
- **GET /ready** (readiness): verifies DB connectivity/pool; returns 200 only when ready; return 503/500 when not ready.
- **Warm-up:** target ~30s; align ECS health grace period accordingly.

## ALB / ECS Expectations (Phase 2)
- ALB target group health check: `path=/ready`, success codes `200-399`, interval 15s, healthy=3, unhealthy=2.
- ECS service deployment: wait for target group healthy before completing.
