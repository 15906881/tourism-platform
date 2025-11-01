const fs = require('fs');
const path = require('path');

const apps = ['site-renderer', 'tenant-dashboard', 'admin'];

// these are the ONLY valid values we want in the apps
const wanted = {
  '@weblynk/blocks': 'file:../../packages/blocks',
  '@weblynk/ui': 'file:../../packages/ui',
  '@weblynk/templates': 'file:../../packages/templates',
  '@weblynk/tokens': 'file:../../packages/tokens',
  '@weblynk/db': 'file:../../packages/db',
  '@weblynk/server': 'file:../../packages/server',
  '@weblynk/auth': 'file:../../packages/auth',
};

for (const app of apps) {
  const pkgPath = path.join('apps', app, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  let changed = false;

  // fix deps
  if (pkg.dependencies) {
    for (const dep of Object.keys(pkg.dependencies)) {
      if (wanted[dep]) {
        // if it was "file:/packages/xxx" or "workspace:*" or anything else => overwrite
        pkg.dependencies[dep] = wanted[dep];
        changed = true;
      }
    }
  }

  // fix devDeps too
  if (pkg.devDependencies) {
    for (const dep of Object.keys(pkg.devDependencies)) {
      if (wanted[dep]) {
        pkg.devDependencies[dep] = wanted[dep];
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✅ fixed', pkgPath);
  } else {
    console.log('ℹ️ no changes for', pkgPath);
  }
}
