# Golden snapshot

Date: 2025-10-12 11:44 MDT
Apps: tenant-dashboard, admin, site-renderer
Status: Build OK, E2E smoke OK, API health OK

Runtime/tooling:
- Node: 18.18.0 (nvm)
- pnpm: 9.x
- Next.js: 14.2.5
- Prisma Client: 5.22.0

Docker:
- Base image: node:18-bullseye
- Output: Next.js standalone (for tenant-dashboard)

Notes:
- Playwright smoke passed for /, /onboarding/sign-up, /api/health
- Keep this branch read-only; do not merge into it.

ECR:
- tourism-tenant-dashboard:staging digest: `sha256:a9287ff65996d6c7555cdafb38a577ddd74b9499521d7e6c700e55bb42b5e84d`
