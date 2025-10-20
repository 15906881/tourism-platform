#!/usr/bin/env bash
set -euo pipefail

echo "==> OPERATIONAL HARDENING BUNDLE"

echo "==> 1) Enforce engine versions at install"
cat > .npmrc << 'RC'
engine-strict=true
RC

echo "==> 2) Scheduled uptime checks (GitHub Actions)"
mkdir -p .github/workflows
cat > .github/workflows/uptime.yml << 'YML'
name: Uptime checks (prod)
on:
  schedule:
    - cron: "*/10 * * * *"
  workflow_dispatch:
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Curl health endpoint
        run: |
          set -e
          URL="${{ secrets.PROD_HEALTH_URL }}"
          if [ -z "$URL" ]; then
            echo "No PROD_HEALTH_URL set; skipping"; exit 0
          fi
          code=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
          echo "HTTP $code from $URL"
          test "$code" -ge 200 -a "$code" -lt 300
YML

echo "==> 3) Release notes from tags"
cat > .github/workflows/release.yml << 'YML'
name: Create GitHub Release
on:
  push:
    tags:
      - "v*"
      - "release-*"
jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - name: Generate notes
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
YML

echo "==> 4) Renovate config"
cat > renovate.json << 'JSON'
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "rangeStrategy": "bump",
  "labels": ["deps"],
  "prHourlyLimit": 2,
  "automerge": false,
  "packageRules": [
    { "matchManagers": ["pnpm"], "enabled": true },
    { "matchPackagePatterns": ["^@types/"], "automerge": true, "automergeType": "pr" },
    { "matchPackageNames": ["typescript"], "groupName": "typescript family" },
    { "matchPackagePatterns": ["^eslint", "^@typescript-eslint"], "groupName": "eslint family" }
  ],
  "ignorePaths": ["**/node_modules/**", "**/.next/**"]
}
JSON

echo "==> 5) Sentry scaffolding"
for app in admin site-renderer tenant-dashboard; do
  if [ -d "apps/$app" ]; then
    cat > "apps/$app/sentry.client.config.ts" << 'TS'
export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || "";
TS
    echo "  ✅ Created sentry config for $app"
  fi
done

echo "==> 6) Ops documentation"
cat > CONTRIBUTING-OPS.md << 'MD'
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
MD

echo "==> 7) Committing"
git add .npmrc .github/workflows/uptime.yml .github/workflows/release.yml \
  renovate.json CONTRIBUTING-OPS.md apps/*/sentry.client.config.ts 2>/dev/null || true

git commit -m 'ops: add uptime checks, release workflow, Renovate, engine-strict, Sentry scaffolding' || echo 'Nothing new'

echo ''
echo '✅ DONE! Push with: git push origin Pristine.02'
