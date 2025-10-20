# Operational Guide

## Health Checks
- Workflow: `.github/workflows/uptime.yml`
- Setup: Add `PROD_HEALTH_URL` in repo Secrets
- Frequency: Every 10 minutes

## Releases
- Use Changesets + git tags
- Workflow auto-generates release notes

## Dependency Updates
- Renovate creates PRs with label `deps`
- Enable at: https://github.com/apps/renovate

## Error Tracking
- Sentry configs in apps (opt-in)
- Set `NEXT_PUBLIC_SENTRY_DSN` to enable
