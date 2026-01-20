import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

import AnnotationLayer from "./AnnotationLayer";
import Toolbar from "./Toolbar";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PDFViewer({ file }) {
  const [page, setPage] = useState(1);

  return (
    <div className="viewer">
      <Toolbar />

      <Document file={file} onLoadError={(e) => console.error(e)}>
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "800px",
          }}
        >
          <Page pageNumber={page} width={600} />

          {/* IMPORTANT FIX */}
          <AnnotationLayer key={page} />
        </div>
      </Document>

      {/* TEMP PAGE CONTROLS */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
