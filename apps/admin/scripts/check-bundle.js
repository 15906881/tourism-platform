const fs = require('fs');
const path = require('path');

const staticDir = path.join(process.cwd(), '.next', 'static');
if (!fs.existsSync(staticDir)) {
  console.log('No .next/static found; skip bundle check.');
  process.exit(0);
}

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
const budgetKB = 700; // Adjusted for admin

console.log(`Bundle size: ${totalKB}kB (budget: ${budgetKB}kB)`);
if (totalKB > budgetKB) {
  console.error(`❌ Bundle exceeds budget by ${totalKB - budgetKB}kB!`);
  process.exit(1);
}
console.log('✅ Bundle OK');
