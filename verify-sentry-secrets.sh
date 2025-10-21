#!/bin/bash
set -e

echo "🔐 Checking Sentry secrets availability..."

REQUIRED_SENTRY_SECRETS=(
  "SENTRY_AUTH_TOKEN"
  "SENTRY_ORG" 
  "SENTRY_DSN"
)

echo "Required Sentry secrets:"
for secret in "${REQUIRED_SENTRY_SECRETS[@]}"; do
  if [ -n "${!secret}" ]; then
    echo "✅ $secret: [SET]"
  else
    echo "❌ $secret: [MISSING]"
  fi
done

echo ""
echo "Project-specific secrets needed:"
for app in admin site-renderer tenant-dashboard; do
  echo "📱 tourism-$app: SENTRY_DSN + SENTRY_AUTH_TOKEN"
done

echo ""
echo "💡 To add secrets in GitHub:"
echo "   Settings → Secrets and variables → Actions → New repository secret"
