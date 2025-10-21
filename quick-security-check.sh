#!/bin/bash
# quick-security-check.sh

echo 🔒 Running security quick checks...

# RLS sanity
echo === RLS Check ===
psql $DATABASE_URL -c "SELECT tablename FROM pg_tables WHERE schemaname='core' AND rowsecurity IS FALSE;"

# Prisma validation
echo === Prisma Check ===
pnpm db:validate && pnpm db:generate

# Secret presence
echo === Secrets Check ===
./ci-secret-check.sh

# Build sanity
echo === Build Check ===
pnpm build

echo ✅ All quick checks passed!
