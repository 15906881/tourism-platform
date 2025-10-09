#!/usr/bin/env bash
set -euo pipefail
OUTDIR="audit"
mkdir -p "$OUTDIR"
TS="$(date +%Y%m%d-%H%M%S)"
OUT="$OUTDIR/onboarding-audit-$TS.md"

say(){ printf "%s\n" "$*" | tee -a "$OUT" >/dev/null; }
hdr(){ printf "\n## %s\n\n" "$*" | tee -a "$OUT" >/dev/null; }
kv(){  printf "%s\n" "- **$1:** $2" | tee -a "$OUT" >/dev/null; }  # avoids printf '-' quirk

echo "# Onboarding Connectivity Audit — $TS" > "$OUT"

hdr "Repo"
kv "CWD" "$(pwd)"
kv "Git branch" "$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'n/a')"
kv "Last commit" "$(git log -1 --oneline 2>/dev/null || echo 'n/a')"

hdr "Workspace layout"
[ -d apps ] && say "- **apps/**: $(ls -1 apps | tr '\n' ' ' | sed 's/ $//')" || say "- **apps/**: missing"
[ -d packages ] && say "- **packages/**: $(ls -1 packages | tr '\n' ' ' | sed 's/ $//')" || say "- **packages/**: missing"

hdr "Key files"
for f in \
  apps/tenant-dashboard/app/api/onboarding/register/route.ts \
  apps/tenant-dashboard/app/api/health/auth/route.ts \
  apps/tenant-dashboard/app/api/health/db/route.ts \
  packages/db/prisma/schema.prisma \
  packages/server/tsconfig.json
do
  [ -e "$f" ] && kv "$f" "FOUND" || kv "$f" "missing"
done

hdr "Environment files (presence only + key checks)"
ENVFILES=(
  "apps/tenant-dashboard/.env.local"
  "apps/admin/.env.local"
  "packages/server/.env"
  "packages/auth/.env"
  "packages/db/.env"
  "api/.env"
)
for e in "${ENVFILES[@]}"; do
  if [ -f "$e" ]; then
    say "- **$e**: present"
    grep -E '^(COGNITO_[A-Z0-9_]+|DATABASE_URL)=' "$e" 2>/dev/null \
      | sed 's/=.*/=(set)/' | sed 's/^/  - /' | tee -a "$OUT" >/dev/null || true
  else
    say "- **$e**: missing"
  fi
done

hdr "Dependencies (Cognito-related libs)"
for pkg in apps/tenant-dashboard packages/server packages/auth; do
  if [ -f "$pkg/package.json" ]; then
    say "- $pkg:"
    grep -E '"(aws-jwt-verify|@aws-sdk/client-cognito-identity-provider|amazon-cognito-identity-js|aws-amplify)"' \
      "$pkg/package.json" | sed 's/^/  /' | tee -a "$OUT" >/dev/null || say "  (none found)"
  fi
done

hdr "Code references (Cognito & Prisma)"
grep -RIn --include='*.ts' --include='*.tsx' --include='*.js' --include='*.mjs' --include='*.cjs' \
  -E '(CognitoIdentityProvider|CognitoJwtVerifier|aws-jwt-verify|amazon-cognito-identity-js|aws-amplify)' \
  . 2>/dev/null | head -n 80 | sed 's/^/  /' | tee -a "$OUT" >/dev/null || say "  (no Cognito refs found)"

grep -RIn --include='*.ts' --include='*.tsx' --include='*.js' --include='*.mjs' --include='*.cjs' \
  -E '(new PrismaClient|@prisma/client|prisma\.(db|migrate|generate|validate|pull))' \
  . 2>/dev/null | head -n 80 | sed 's/^/  /' | tee -a "$OUT" >/dev/null || say "  (no Prisma refs found)"

hdr "Prisma schema & CLI"
if [ -f packages/db/prisma/schema.prisma ]; then
  say "- packages/db/prisma/schema.prisma: present"
  (cd packages/db && npx --yes prisma --version | sed 's/^/  /' | tee -a "../$OUT" >/dev/null) || true
  say "- prisma validate:"
  (cd packages/db && npx --yes prisma validate 2>&1 | sed 's/^/  /' | tee -a "../$OUT" >/dev/null) || true
else
  say "- schema missing; skipping prisma checks"
fi

hdr "DB connectivity (optional db pull)"
DBURL="$( (grep -hR --no-messages '^DATABASE_URL=' "${ENVFILES[@]}" 2>/dev/null || true) | tail -n1 | cut -d'=' -f2- )"
if [ -n "${DBURL:-}" ]; then
  say "- DATABASE_URL: (found; redacted)"
  (cd packages/db && DATABASE_URL="$DBURL" npx --yes prisma db pull --print --schema prisma/schema.prisma >/dev/null \
    && say "  prisma db pull: OK" \
    || say "  prisma db pull: FAILED (check credentials/SG)")
else
  say "- DATABASE_URL: not found"
fi

hdr "Node toolchain"
kv "node" "$(node -v 2>/dev/null || echo 'not installed')"
kv "pnpm" "$(pnpm -v 2>/dev/null || echo 'not installed')"

hdr "Known issue check (tsconfig NodeNext)"
if [ -f packages/server/tsconfig.json ]; then
  if command -v jq >/dev/null 2>&1; then
    MOD="$(jq -r '.compilerOptions.module // empty' packages/server/tsconfig.json)"
    RES="$(jq -r '.compilerOptions.moduleResolution // empty' packages/server/tsconfig.json)"
  else
    MOD="$(grep -Eo '"module"[[:space:]]*:[[:space:]]*"[^"]+"' packages/server/tsconfig.json | head -n1 | cut -d'"' -f4 || true)"
    RES="$(grep -Eo '"moduleResolution"[[:space:]]*:[[:space:]]*"[^"]+"' packages/server/tsconfig.json | head -n1 | cut -d'"' -f4 || true)"
  fi
  kv "packages/server tsconfig.module" "${MOD:-n/a}"
  kv "packages/server tsconfig.moduleResolution" "${RES:-n/a}"
else
  say "- packages/server/tsconfig.json: missing"
fi

say
say "---"
say "Write-up saved to: $OUT"
