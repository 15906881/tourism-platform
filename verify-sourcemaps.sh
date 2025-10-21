#!/bin/bash
set -e

echo "🗺️ Checking source maps configuration..."

echo "Workflow files:"
ls -la .github/workflows/ || echo "No workflows directory"

echo ""
echo "Source maps workflow should:"
echo "✅ Run on deployment events"
echo "✅ Set SENTRY_RELEASE environment variable" 
echo "✅ Build apps with source maps enabled"
echo "✅ Upload source maps using sentry-cli"
echo "✅ Use correct project names (tourism-admin, etc.)"

echo ""
echo "To verify in CI:"
echo "1. Check last workflow run logs for 'upload-sourcemaps' step"
echo "2. Look for 'Uploaded X files' or 'Sourcemap upload completed'"
echo "3. Verify Sentry project receives source maps"
