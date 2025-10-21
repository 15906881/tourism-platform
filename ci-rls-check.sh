#!/bin/bash
# ci-rls-check.sh - CI guardrail to ensure RLS is enabled on core tables

set -e

PGURL='postgresql://postgres:postgres@localhost:5432/tourism_dev'

echo '🔍 Checking RLS status on core tables...'

# Check for tables with RLS disabled
VIOLATIONS=$(psql "$PGURL" -At <<'SQL'
SELECT tablename 
FROM pg_tables 
WHERE schemaname='core' 
  AND rowsecurity IS FALSE 
  AND tablename NOT IN ('_prisma_migrations')
SQL
)

# Check for tables missing policies
MISSING_POLICIES=$(psql "$PGURL" -At <<'SQL'
SELECT t.tablename
FROM pg_tables t
LEFT JOIN pg_policies p ON p.tablename = t.tablename AND p.schemaname = t.schemaname
WHERE t.schemaname = 'core' 
  AND t.rowsecurity IS TRUE
  AND p.policyname IS NULL
GROUP BY t.tablename
HAVING COUNT(p.policyname) = 0
SQL
)

# Clean up newlines
VIOLATIONS=$(echo "$VIOLATIONS" | tr '\n' ' ')
MISSING_POLICIES=$(echo "$MISSING_POLICIES" | tr '\n' ' ')

# Report results
if [ -n "$VIOLATIONS" ]; then
  echo '❌ RLS DISABLED on tables: '"$VIOLATIONS"
  echo '   Run: ALTER TABLE core.<table> ENABLE ROW LEVEL SECURITY;'
  exit 1
fi

if [ -n "$MISSING_POLICIES" ]; then
  echo '❌ RLS ENABLED but NO POLICIES on tables: '"$MISSING_POLICIES"
  echo '   These tables are inaccessible! Add RLS policies.'
  exit 1
fi

echo '✅ All core tables have RLS properly configured!'
exit 0
