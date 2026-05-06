const fs = require('node:fs/promises')
const path = require('node:path')
const { PDFParse } = require('pdf-parse')

const pdfPaths = [
  'C:/Users/vinitkumar2/Downloads/YSS-Full-pdf.pdf',
  'C:/Users/vinitkumar2/Downloads/YSS-3-Month-Training-Program-Comparison.pdf',
]

const outDir = 'C:/Users/vinitkumar2/Documents/My project/YSS_website/temp_pdf_text'

async function run() {
  await fs.mkdir(outDir, { recursive: true })

  for (const pdfPath of pdfPaths) {
    try {
      const dataBuffer = await fs.readFile(pdfPath)
      const parser = new PDFParse({ data: dataBuffer })
      const data = await parser.getText()
      const stem = path.basename(pdfPath, path.extname(pdfPath))
      const outPath = path.join(outDir, `${stem}.txt`)
      await fs.writeFile(outPath, data.text || '', 'utf8')
      await parser.destroy()
      console.log(`WROTE: ${outPath}`)
    } catch (error) {
      console.error(`FAILED: ${pdfPath}`)
      console.error(error.message)
    }
  }
}

run()
