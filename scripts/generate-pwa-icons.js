import { promises as fs } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sizes = [192, 512]
const inputFile = join(__dirname, '../public/favicon.svg')

async function generateIcons() {
  const publicDir = join(__dirname, '../public')

  // Ensure public directory exists
  await fs.mkdir(publicDir, { recursive: true })

  for (const size of sizes) {
    const outputFile = join(publicDir, `pwa-${size}x${size}.png`)
    await sharp(inputFile)
      .resize(size, size)
      .toFile(outputFile)
    console.log(`Generated ${size}x${size} icon`)
  }
}

generateIcons().catch(console.error)
