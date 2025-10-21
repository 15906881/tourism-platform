#!/bin/bash
set -e

echo "🛡️ Checking security headers..."

echo "Testing against local development servers..."
echo "Note: Some headers may only appear in production"

for port in 3000 3001 3002; do
  echo ""
  echo "=== Testing port $port ==="
  curl -s -I http://localhost:$port | grep -E "(Content-Security-Policy|X-Frame-Options|Strict-Transport-Security|Referrer-Policy|X-Content-Type-Options|Permissions-Policy)" || echo "No security headers detected (app may not be running)"
done

echo ""
echo "Expected headers in production:"
echo "✅ Content-Security-Policy: ..."
echo "✅ X-Frame-Options: DENY"
echo "✅ Strict-Transport-Security: max-age=..."
echo "✅ Referrer-Policy: strict-origin-when-cross-origin"
echo "✅ X-Content-Type-Options: nosniff"
echo "✅ Permissions-Policy: camera=(), microphone=(), geolocation=()"
