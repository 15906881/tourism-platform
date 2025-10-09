import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure dist/styles directory exists
const stylesDir = path.join(__dirname, 'dist', 'styles');
fs.mkdirSync(stylesDir, { recursive: true });

// Copy CSS files from src/styles to dist/styles
const srcStylesDir = path.join(__dirname, 'src', 'styles');
if (fs.existsSync(srcStylesDir)) {
  const files = fs.readdirSync(srcStylesDir);
  files.forEach(file => {
    if (file.endsWith('.css')) {
      fs.copyFileSync(
        path.join(srcStylesDir, file),
        path.join(stylesDir, file)
      );
      console.log(`✅ Copied ${file} to dist/styles/`);
    }
  });
}

// Copy CSS files from styles to dist/styles  
const rootStylesDir = path.join(__dirname, 'styles');
if (fs.existsSync(rootStylesDir)) {
  const files = fs.readdirSync(rootStylesDir);
  files.forEach(file => {
    if (file.endsWith('.css')) {
      fs.copyFileSync(
        path.join(rootStylesDir, file),
        path.join(stylesDir, file)
      );
      console.log(`✅ Copied ${file} to dist/styles/`);
    }
  });
}
