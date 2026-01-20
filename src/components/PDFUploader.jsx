import { useState } from "react";
import PDFViewer from "./PDFViewer";

export default function PDFUploader() {
  const [file, setFile] = useState(null);

  return (
    <>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {file && <PDFViewer file={file} />}
    </>
  );
}
