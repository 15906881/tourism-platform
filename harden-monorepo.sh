#!/usr/bin/env bash
set -euo pipefail

# ===============================
# Monorepo hardening – bash only
# ===============================

root="$(pwd)"

echo '==> 0) Ensure Node/pnpm pin files'
# .nvmrc for local dev
echo '20.19.5' > .nvmrc

# pnpm workspace manifest (silence warnings)
if [ ! -f pnpm-workspace.yaml ]; then
cat > pnpm-workspace.yaml << 'YAML'
packages:
  - 'apps/*'
  - 'packages/*'
YAML
fi

echo '==> 1) Add engines to all packages & apps'
find packages apps -maxdepth 2 -name 'package.json' | while read -r f; do
  node -e "
    const fs=require('fs');
    const p=JSON.parse(fs.readFileSync('${f}','utf8'));
    p.engines = Object.assign({ node: '>=20.19.5', pnpm: '>=9.12.0' }, p.engines||{});
    fs.writeFileSync('${f}', JSON.stringify(p,null,2)+'\n');
  "
done

echo '==> 2) Install repo-wide dev tools (if not present)'
pnpm list -w eslint-config-next >/dev/null 2>&1 || pnpm -w add -D eslint-config-next
pnpm list -w husky >/dev/null 2>&1 || pnpm -w add -D husky
pnpm list -w lint-staged >/dev/null 2>&1 || pnpm -w add -D lint-staged
pnpm list -w @changesets/cli >/dev/null 2>&1 || pnpm -w add -D @changesets/cli

echo '==> 3) Initialize Changesets (idempotent)'echo '==> 3) Initialize Changesets (idempotent)'
[ -d .changeset ] || pnpm dlx @changesets/cli init
[ -d .changeset ] || pnpm dlx @changesets/cli init

echo '==> 4) Configure ESLint for Next apps'
for app in apps/admin apps/site-renderer apps/tenant-dashboard; do
  if [ -f "$app/.eslintrc.json" ]; then
    node -e "
      const fs=require('fs');
      const p='${app}/.eslintrc.json';
      let c={};
      try{c=JSON.parse(fs.readFileSync(p,'utf8'))}catch{}
      const ex = new Set([...(c.extends||[]), 'next/core-web-vitals']);
      c.extends = Array.from(ex).filter(Boolean);
      fs.writeFileSync(p, JSON.stringify(c,null,2)+'\n');
    "
  else
    # Create a basic JSON config
    cat > "$app/.eslintrc.json" << 'JSON'
{
  "extends": ["next/core-web-vitals"]
}
JSON
  fi
done

echo '==> 5) Setup Husky + lint-staged'
# Initialize husky if not present
if [ ! -d .husky ]; then
  npx husky init
fi

# Pre-commit hook content
cat > .husky/pre-commit << 'SH'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "➤ lint-staged"
pnpm lint-staged
SH
chmod +x .husky/pre-commit

# Add lint-staged config to root package.json
node -e "
  const fs=require('fs');
  const p=JSON.parse(fs.readFileSync('./package.json','utf8'));
  p['lint-staged']={
    '*.{ts,tsx,js,jsx}': ['eslint --fix']
  };
  fs.writeFileSync('package.json', JSON.stringify(p,null,2)+'\n');
"

echo '==> 6) Add UI smoke script'
mkdir -p scripts
cat > scripts/smoke-ui.mjs << 'MJS'
import('@weblynk/ui').then(m=>{
  if(!('Badge' in m)) {
    console.error('❌ Smoke: Badge export missing from @weblynk/ui');
    process.exit(1);
  }
  console.log('✅ Smoke: @weblynk/ui import OK (found Badge)');
}).catch(e => { console.error(e); process.exit(1); });
MJS

# Attach npm scripts
node -e "
  const fs=require('fs');
  const p=JSON.parse(fs.readFileSync('./package.json','utf8'));
  p.scripts=p.scripts||{};
  if(!p.scripts['smoke:ui']) p.scripts['smoke:ui']='node scripts/smoke-ui.mjs';
  fs.writeFileSync('package.json', JSON.stringify(p,null,2)+'\n');
"

echo '==> 7) Add bundle check helper to Next apps'
for app in apps/admin apps/site-renderer apps/tenant-dashboard; do
  mkdir -p "$app/scripts"
  cat > "$app/scripts/check-bundle.js" << 'JS'
const fs = require('fs');
const path = require('path');

// Simple check: look at .next/static size
const staticDir = path.join(process.cwd(), '.next', 'static');
if (!fs.existsSync(staticDir)) {
  console.log('No .next/static found; skip bundle check.');
  process.exit(0);
}

// Calculate total size
function getDirSize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += fs.statSync(filePath).size;
    }
  }
  return size;
}

const totalKB = Math.round(getDirSize(staticDir) / 1024);
const budgetKB = 500; // Adjust as needed

console.log(`Bundle size: ${totalKB}kB (budget: ${budgetKB}kB)`);
if (totalKB > budgetKB) {
  console.error(`❌ Bundle exceeds budget!`);
  process.exit(1);
}
console.log('✅ Bundle OK');
JS

  if [ -f "$app/package.json" ]; then
    node -e "
      const fs=require('fs');
      const p=JSON.parse(fs.readFileSync('./${app}/package.json','utf8'));
      p.scripts=p.scripts||{};
      p.scripts.bundlecheck = 'node scripts/check-bundle.js';
      fs.writeFileSync('./${app}/package.json', JSON.stringify(p,null,2)+'\n');
    "
  fi
done

echo '==> 8) Install and smoke test'
pnpm install
pnpm --filter @weblynk/ui build
node scripts/smoke-ui.mjs

echo '==> 9) Commit changes'
git add \
  .nvmrc pnpm-workspace.yaml \
  package.json pnpm-lock.yaml \
  .husky scripts \
  'apps/*/.eslintrc.*' 'apps/*/scripts' \
  'packages/*/package.json' 2>/dev/null || true

git commit -m 'chore: harden monorepo (engines, husky/lint-staged, eslint, smoke scripts)' || echo 'Nothing to commit.'

echo ''
echo '✅ Done!'
echo 'To push changes: git push origin Pristine.02'#!/usr/bin/env bash
set -euo pipefail

# ===============================
# Monorepo hardening – bash only
# ===============================

root="$(pwd)"

echo '==> 0) Ensure Node/pnpm pin files'
# .nvmrc for local dev
echo '20.19.5' > .nvmrc

# [... paste the rest of the script here ...]

