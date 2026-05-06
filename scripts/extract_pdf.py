from pathlib import Path
from pypdf import PdfReader

pdf_paths = [
    Path(r"C:\Users\vinitkumar2\Downloads\YSS-Full-pdf.pdf"),
    Path(r"C:\Users\vinitkumar2\Downloads\YSS-3-Month-Training-Program-Comparison.pdf"),
]

out_dir = Path(r"C:\Users\vinitkumar2\Documents\My project\YSS_website\temp_pdf_text")
out_dir.mkdir(parents=True, exist_ok=True)

for pdf_path in pdf_paths:
    if not pdf_path.exists():
        print(f"MISSING: {pdf_path}")
        continue

    reader = PdfReader(str(pdf_path))
    pages = []
    for i, page in enumerate(reader.pages, start=1):
        txt = page.extract_text() or ""
        pages.append(f"\n\n===== PAGE {i} =====\n\n{txt}")

    out_file = out_dir / f"{pdf_path.stem}.txt"
    out_file.write_text("".join(pages), encoding="utf-8")
    print(f"WROTE: {out_file}")
