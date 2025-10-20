# CI/CD Secrets (names only)
- PROD_HEALTH_URL (for uptime pings)
- NEXT_PUBLIC_SENTRY_DSN (enable Sentry when ready)
- Any API keys used by apps (document name + owner)

Store these in:
- GitHub: Settings → Secrets and variables → Actions
- Amplify: App → Environment variables (per branch)
