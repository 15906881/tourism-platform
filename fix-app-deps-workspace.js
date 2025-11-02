const fs = require('fs');
const path = require('path');

// the 3 apps Vercel builds
const appPkgs = [
  'apps/site-renderer/package.json',
  'apps/tenant-dashboard/package.json',
  'apps/admin/package.json',
];

// map of what we want
const wanted = {
  '@weblynk/ui': 'file:../../packages/ui',
  '@weblynk/blocks': 'file:../../packages/blocks',
  '@weblynk/templates': 'file:../../packages/templates',
  '@weblynk/tokens': 'file:../../packages/tokens',
  '@weblynk/server': 'file:../../packages/server',
  '@weblynk/auth': 'file:../../packages/auth',
  '@weblynk/db': 'file:../../packages/db',
};

for (const rel of appPkgs) {
  const abs = path.join(process.cwd(), rel);
  const pkg = JSON.parse(fs.readFileSync(abs, 'utf8'));
  let changed = false;

  const fixObj = (obj) => {
    if (!obj) return;
    for (const dep of Object.keys(obj)) {
      // if it's one of ours
      if (wanted[dep]) {
        const val = obj[dep];
        // fix these cases:
        // 1) workspace:* 
        // 2) * 
        // 3) /packages/db (bad absolute) 
        // 4) file:/packages/db (bad absolute)
        if (
          val === 'workspace:*' ||
          val === '*' ||
          val === `/packages/${dep.split('/')[1]}` ||
          val === `file:/packages/${dep.split('/')[1]}`
        ) {
          obj[dep] = wanted[dep];
          changed = true;
        }
      }
    }
  };

  fixObj(pkg.dependencies);
  fixObj(pkg.devDependencies);

  if (changed) {
    fs.writeFileSync(abs, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✅ fixed', rel);
  } else {
    console.log('ℹ️ no changes for', rel);
  }
}
