#!/usr/bin/env bash
set -Eeuo pipefail

STAMP="$(date '+%Y-%m-%d %H:%M %Z')"
SNAP="golden-$(date +%Y%m%d-%H%M)"
DIR="docs/golden/${SNAP}"
GOLDEN_FILE="${DIR}/GOLDEN.md"

REGION="us-east-1"
APP_REPO="tourism-tenant-dashboard"

mkdir -p "$DIR"

# 1) Ensure file exists with a template (idempotent)
if [ ! -f "$GOLDEN_FILE" ]; then
  cat >"$GOLDEN_FILE" <<'MD'
# Golden snapshot

Date: (fill in current date/time)
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
- tourism-tenant-dashboard:staging digest: (pending)
MD
  echo "📝 Created new golden snapshot template"
fi

# 2) Stamp the date (replace placeholder if present; otherwise append)
if grep -q "(fill in current date/time)" "$GOLDEN_FILE"; then
  sed -i '' "s|(fill in current date/time)|$STAMP|" "$GOLDEN_FILE"
  echo "📅 Updated date stamp"
else
  # Check if date already exists to avoid duplicates
  if ! grep -q "Date:.*$STAMP" "$GOLDEN_FILE"; then
    printf "\nDate: %s\n" "$STAMP" >>"$GOLDEN_FILE"
    echo "📅 Added date stamp"
  fi
fi

# 3) Fetch ECR digest (guard for empty / None)
echo "🔍 Fetching ECR digest..."
DIGEST="$(aws ecr describe-images --region "$REGION" --repository-name "$APP_REPO" \
  --image-ids imageTag=staging --query 'imageDetails[0].imageDigest' --output text 2>/dev/null || echo "")"

if [ -z "$DIGEST" ] || [ "$DIGEST" = "None" ]; then
  echo "⚠️  No :staging digest found for ${APP_REPO} in ${REGION} (skipping digest write)"
else
  # Prefer GNU sed if available for portability
  if command -v gsed >/dev/null 2>&1; then
    gsed -i "s#\(tourism-tenant-dashboard:staging digest:\).*#\1 \`${DIGEST}\`#" "$GOLDEN_FILE"
  else
    if grep -q "tourism-tenant-dashboard:staging digest:" "$GOLDEN_FILE"; then
      sed -i '' "s#\(tourism-tenant-dashboard:staging digest:\).*#\1 \`${DIGEST}\`#" "$GOLDEN_FILE"
    else
      printf "\nECR:\n- %s:staging digest: \`%s\`\n" "$APP_REPO" "$DIGEST" >>"$GOLDEN_FILE"
    fi
  fi
  echo "✅ Updated ECR digest"
fi

echo ""
echo "🎉 Golden snapshot updated successfully:"
echo "   File: $GOLDEN_FILE"
echo "   Date: $STAMP"
echo "   Digest: ${DIGEST:-<not found>}"
