import { PDFDocument } from "pdf-lib";

export async function exportPdf(originalFile, canvas) {
  const bytes = await originalFile.arrayBuffer();
  const pdfDoc = await PDFDocument.load(bytes);

  const page = pdfDoc.getPages()[0];
  const png = await pdfDoc.embedPng(canvas.toDataURL("image/png"));

  page.drawImage(png, {
    x: 0,
    y: 0,
    width: page.getWidth(),
    height: page.getHeight(),
  });

  const finalPdf = await pdfDoc.save();
  return finalPdf;
}
