#!/bin/bash
set -e

echo "🗄️ Validating database state..."

# Check for schema drift
env $(cat packages/db/.env | xargs) pnpm --filter @weblynk/db exec \
  prisma migrate diff \
  --from-schema-datamodel packages/db/prisma/schema.prisma \
  --to-url "$DATABASE_URL" \
  --exit-code

# Check RLS is enabled on all core tables
RLS_VIOLATIONS=$(psql "$DATABASE_URL" -t -c "
  SELECT tablename FROM pg_tables
  WHERE schemaname='core' AND rowsecurity IS FALSE AND tablename != '_prisma_migrations';
")

if [ -n "$RLS_VIOLATIONS" ]; then
  echo "❌ RLS DISABLED on tables: $RLS_VIOLATIONS"
  exit 1
fi

echo "✅ Database validation passed!"
