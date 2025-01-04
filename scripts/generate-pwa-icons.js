import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';

const sizes = [192, 512];
const source = './public/favicon.svg';

async function generateIcons() {
  try {
    // Ensure public directory exists
    await mkdir('./public', { recursive: true });

    for (const size of sizes) {
      await sharp(source)
        .resize(size, size)
        .toFile(`./public/pwa-${size}x${size}.png`);
      
      console.log(`Generated ${size}x${size} icon`);
    }
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 