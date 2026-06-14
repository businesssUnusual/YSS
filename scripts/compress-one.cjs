/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

sharp.cache(false)
sharp.concurrency(1)

const target = process.argv[2]
if (!target) {
  console.error('Missing file path argument')
  process.exit(2)
}

const filePath = path.resolve(target)
const ext = path.extname(filePath).toLowerCase()
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const MODE = process.env.COMPRESS_MODE || 'gentle'
const MAX_LONG_EDGE = Number.parseInt(process.env.MAX_LONG_EDGE || '', 10)

if (!fs.existsSync(filePath)) {
  console.error('File not found')
  process.exit(3)
}

if (!SUPPORTED.has(ext)) {
  console.log(JSON.stringify({ status: 'skipped', reason: 'unsupported', filePath }))
  process.exit(0)
}

const original = fs.statSync(filePath).size
const tempPath = `${filePath}.tmp`

async function run() {
  try {
    let pipeline = sharp(filePath, { failOn: 'none' }).rotate()
    const metadata = await pipeline.metadata()

    if (Number.isFinite(MAX_LONG_EDGE) && MAX_LONG_EDGE > 0 && metadata.width && metadata.height) {
      const longEdge = Math.max(metadata.width, metadata.height)
      if (longEdge > MAX_LONG_EDGE) {
        pipeline = pipeline.resize({
          width: metadata.width >= metadata.height ? MAX_LONG_EDGE : undefined,
          height: metadata.height > metadata.width ? MAX_LONG_EDGE : undefined,
          fit: 'inside',
          withoutEnlargement: true,
        })
      }
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      if (MODE === 'balanced') {
        pipeline = pipeline.jpeg({
          quality: 82,
          mozjpeg: true,
          progressive: true,
          chromaSubsampling: '4:2:0',
        })
      } else {
        pipeline = pipeline.jpeg({
          quality: 90,
          mozjpeg: true,
          progressive: true,
          chromaSubsampling: '4:4:4',
        })
      }
    } else if (ext === '.png') {
      if (MODE === 'balanced') {
        pipeline = pipeline.png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          effort: 7,
          palette: true,
          quality: 90,
        })
      } else {
        pipeline = pipeline.png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          effort: 6,
        })
      }
    } else if (ext === '.webp') {
      if (MODE === 'balanced') {
        pipeline = pipeline.webp({
          quality: 88,
          nearLossless: true,
          effort: 5,
        })
      } else {
        pipeline = pipeline.webp({
          lossless: true,
          effort: 4,
        })
      }
    }

    await pipeline.toFile(tempPath)
    const optimized = fs.statSync(tempPath).size

    if (optimized < original) {
      fs.renameSync(tempPath, filePath)
      console.log(JSON.stringify({ status: 'optimized', filePath, original, optimized }))
      return
    }

    fs.unlinkSync(tempPath)
    console.log(JSON.stringify({ status: 'skipped', reason: 'not-smaller', filePath, original, optimized }))
  } catch (error) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath)
    console.log(JSON.stringify({ status: 'error', filePath, reason: error.message }))
    process.exit(1)
  }
}

run()
