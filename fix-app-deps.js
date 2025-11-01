const fs = require('fs');
const path = require('path');

const apps = ['site-renderer', 'tenant-dashboard', 'admin'];

// what we want to force
const replacements = {
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

  for (const [name, fileRef] of Object.entries(replacements)) {
    if (pkg.dependencies && pkg.dependencies[name]) {
      pkg.dependencies[name] = fileRef;
      changed = true;
    }
    if (pkg.devDependencies && pkg.devDependencies[name]) {
      pkg.devDependencies[name] = fileRef;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✅ patched', pkgPath);
  } else {
    console.log('ℹ️ no changes for', pkgPath);
  }
}
