#!/bin/bash
# Diagnostic script for tx.listings TypeScript error

echo "=== 1. Check if Prisma client is generated ==="
ls -la packages/db/generated/prisma/ 2>/dev/null || echo "❌ No generated Prisma client found"

echo -e "\n=== 2. Check what db exports from packages/db ==="
cat packages/db/src/index.ts

echo -e "\n=== 3. Check if listings exists in generated client ==="
grep -r "listings" packages/db/generated/prisma/index.d.ts 2>/dev/null | head -5 || echo "❌ listings not found in types"

echo -e "\n=== 4. Check how tenant-dashboard imports db ==="
grep "from.*@weblynk/db" apps/tenant-dashboard/server/trpc.ts

echo -e "\n=== 5. Check tenant-dashboard tsconfig module resolution ==="
cat apps/tenant-dashboard/tsconfig.json | grep -A 3 "moduleResolution\|baseUrl\|paths"

echo -e "\n=== DIAGNOSIS COMPLETE ==="
