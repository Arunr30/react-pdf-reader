import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

import AnnotationLayer, { getCanvas } from "./AnnotationLayer";
import Toolbar from "./Toolbar";
import { exportPdf } from "../utils/flattenPdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PDFViewer({ file }) {
  const [page] = useState(1);

  const handleExport = async () => {
    const canvas = getCanvas();
    if (!canvas) return;

    const pdfBytes = await exportPdf(file, canvas);

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "edited.pdf";
    link.click();
  };

  return (
    <div className="viewer">
      <Toolbar />
      <button className="export" onClick={handleExport}>
        Download PDF
      </button>

      <div style={{ position: "relative" }}>
        <Document file={file}>
          <Page pageNumber={page} width={600} />
          <AnnotationLayer page={page} />
        </Document>
      </div>
    </div>
  );
}
