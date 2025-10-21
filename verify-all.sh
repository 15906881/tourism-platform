#!/bin/bash
set -e

echo "🚀 Running comprehensive verification suite..."
echo "=============================================="

export DATABASE_URL='postgresql://postgres:postgres@localhost:5432/tourism_dev'

./verify-rls-status.sh
echo ""
./verify-tenant-isolation.sh  
echo ""
./verify-sentry-secrets.sh
echo ""
./verify-sourcemaps.sh
echo ""
./verify-security-headers.sh
echo ""
./verify-workflows.sh

echo ""
echo "=============================================="
echo "✅ All verification scripts completed"
echo "💡 Review output above for any issues"
