#!/bin/bash
set -e

echo "🔐 Checking required secrets..."

REQUIRED_SECRETS=(
  "DATABASE_URL"
  "NEXTAUTH_SECRET" 
  "SENTRY_AUTH_TOKEN"
  "SENTRY_DSN"
)

for secret in "${REQUIRED_SECRETS[@]}"; do
  if [ -z "${!secret}" ]; then
    echo "❌ Missing required secret: $secret"
    exit 1
  fi
done

echo "✅ All required secrets present"
