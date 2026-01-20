import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

import AnnotationLayer, { getCanvas } from "./AnnotationLayer";
import Toolbar from "./Toolbar";
import { exportPdf } from "../utils/flattenPdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PDFViewer({ file }) {
  const [page, setPage] = useState(1);

  const handleExport = async () => {
    const canvas = getCanvas();

    if (!canvas) {
      alert("Canvas not ready. Please try again.");
      return;
    }

    const pdfBytes = await exportPdf(file, canvas);

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "edited.pdf";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="viewer">
      <Toolbar />

      <button
        onClick={handleExport}
        style={{
          margin: "10px 0",
          padding: "10px 16px",
          background: "#00c853",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      <Document file={file}>
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "800px",
          }}
        >
          <Page pageNumber={page} width={600} />
          <AnnotationLayer key={page} />
        </div>
      </Document>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
