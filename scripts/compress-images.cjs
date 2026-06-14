/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

sharp.cache(false)
sharp.concurrency(1)

const ROOT_DIR = path.resolve(__dirname, '../public/images')
const THRESHOLD_BYTES = 1 * 1024 * 1024 // 1 MB
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const PROGRESS_EVERY = 25

function formatMB(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath))
    } else if (entry.isFile()) {
      files.push(fullPath)
    }
  }

  return files
}

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    return { status: 'skipped', reason: 'unsupported', filePath }
  }

  const original = fs.statSync(filePath).size
  if (original <= THRESHOLD_BYTES) {
    return { status: 'skipped', reason: 'below-threshold', filePath }
  }

  const tempPath = `${filePath}.tmp`

  try {
    let pipeline = sharp(filePath, { failOn: 'none' }).rotate()

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: 90,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: '4:4:4',
      })
    } else if (ext === '.png') {
      // Lossless PNG optimization.
      pipeline = pipeline.png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        effort: 6,
      })
    } else if (ext === '.webp') {
      // Preserve quality by using lossless webp.
      pipeline = pipeline.webp({
        lossless: true,
        effort: 4,
      })
    }

    await pipeline.toFile(tempPath)

    const optimized = fs.statSync(tempPath).size
    if (optimized < original) {
      fs.renameSync(tempPath, filePath)
      return { status: 'optimized', filePath, original, optimized }
    }

    fs.unlinkSync(tempPath)
    return { status: 'skipped', reason: 'not-smaller', filePath, original, optimized }
  } catch (error) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath)
    return { status: 'error', filePath, reason: error.message }
  }
}

async function run() {
  if (!fs.existsSync(ROOT_DIR)) {
    console.error(`Images folder not found: ${ROOT_DIR}`)
    process.exit(1)
  }

  const allFiles = getAllFiles(ROOT_DIR)
  const candidates = allFiles.filter(filePath => {
    const ext = path.extname(filePath).toLowerCase()
    if (!SUPPORTED_EXTENSIONS.has(ext)) return false
    return fs.statSync(filePath).size > THRESHOLD_BYTES
  })

  const results = []

  console.log(`Scanned files: ${allFiles.length}`)
  console.log(`Candidates (>1MB supported): ${candidates.length}`)

  let processed = 0
  for (const filePath of candidates) {
    // eslint-disable-next-line no-await-in-loop
    const result = await compressFile(filePath)
    results.push(result)

    processed += 1
    if (processed % PROGRESS_EVERY === 0 || processed === candidates.length) {
      console.log(`Progress: ${processed}/${candidates.length}`)
    }
  }

  const optimized = results.filter(r => r.status === 'optimized')
  const errors = results.filter(r => r.status === 'error')
  const over1mb = results.filter(
    r => r.status !== 'skipped' || (r.status === 'skipped' && r.reason !== 'below-threshold')
  )

  const totalBefore = optimized.reduce((sum, r) => sum + r.original, 0)
  const totalAfter = optimized.reduce((sum, r) => sum + r.optimized, 0)
  const saved = totalBefore - totalAfter

  console.log(`Processed (>1MB supported): ${over1mb.length}`)
  console.log(`Optimized: ${optimized.length}`)
  console.log(`Errors: ${errors.length}`)
  console.log(`Saved: ${formatMB(saved)} (${saved.toLocaleString()} bytes)`)

  if (optimized.length > 0) {
    console.log('\nTop 15 savings:')
    optimized
      .sort((a, b) => (b.original - b.optimized) - (a.original - a.optimized))
      .slice(0, 15)
      .forEach(item => {
        const diff = item.original - item.optimized
        const relative = path.relative(path.resolve(__dirname, '..'), item.filePath)
        console.log(
          `- ${relative}: ${formatMB(item.original)} -> ${formatMB(item.optimized)} (saved ${formatMB(diff)})`
        )
      })
  }

  if (errors.length > 0) {
    console.log('\nFiles with errors:')
    errors.slice(0, 30).forEach(item => {
      const relative = path.relative(path.resolve(__dirname, '..'), item.filePath)
      console.log(`- ${relative}: ${item.reason}`)
    })
    process.exitCode = 1
  }
}

run()
