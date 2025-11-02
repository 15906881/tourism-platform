const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const root = process.cwd();
const srcRoot = path.join(root, 'packages');
const absTarget = '/packages';

const PKGS = [
  'blocks',
  'db',
  'ui',
  'templates',
  'tokens',
  'server',
  'auth',
];

try {
  fs.mkdirSync(absTarget, { recursive: true });
  console.log('✅ created', absTarget);
} catch (e) {
  console.log('ℹ️ could not create', absTarget, e.message);
}

for (const name of PKGS) {
  const src = path.join(srcRoot, name);
  const dest = path.join(absTarget, name);

  if (!fs.existsSync(src)) {
    console.log('⚠️ skip, src does not exist:', src);
    continue;
  }

  try {
    execSync(`cp -R "${src}" "${dest}"`, { stdio: 'inherit' });
    console.log('✅ copied', src, '→', dest);
  } catch (e) {
    console.log('❌ copy failed for', name, e.message);
  }
}
