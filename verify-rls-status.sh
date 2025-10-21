#!/bin/bash
set -e

echo "🔍 Checking RLS status on all core tables..."

psql "$DATABASE_URL" -c "
SELECT 
  schemaname as schema,
  tablename as table,
  rowsecurity as rls_on
FROM pg_tables 
WHERE schemaname = 'core'
ORDER BY tablename;"

echo ""
echo "✅ RLS status check complete"
echo "   Expected: All business tables should have rls_on = t"
echo "   OK if _prisma_migrations has rls_on = f"
