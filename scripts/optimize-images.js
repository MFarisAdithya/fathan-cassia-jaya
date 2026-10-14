import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function convertImages() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    return;
  }

  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in public/images/`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      const webpPath = path.join(imagesDir, `${baseName}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 82, effort: 4 })
          .toFile(webpPath);
        
        const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(1);
        console.log(`✓ Converted: ${file} (${origSize} KB) -> ${baseName}.webp (${webpSize} KB)`);
      } catch (err) {
        console.error(`✗ Error converting ${file}:`, err.message);
      }
    }
  }

  console.log('All images optimized to WebP successfully.');
}

convertImages();
