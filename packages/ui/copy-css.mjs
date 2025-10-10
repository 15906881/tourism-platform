import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyCSS() {
  try {
    const srcPath = path.join(__dirname, 'src/styles.css');
    const destPath = path.join(__dirname, 'dist/styles.css');
    
    // Check if source file exists
    try {
      await fs.access(srcPath);
    } catch {
      console.log('⚠️  No styles.css found, creating empty file...');
      await fs.writeFile(srcPath, '/* Weblynk UI Styles */\n');
    }
    
    await fs.copyFile(srcPath, destPath);
    console.log('✅ CSS file copied successfully');
  } catch (error) {
    console.error('❌ Error copying CSS file:', error.message);
    // Don't exit, just warn
  }
}

copyCSS();
