import { Document, Page } from "react-pdf";

export default function ThumbnailSidebar({ file, setPage }) {
  return (
    <div style={{ width: "120px", overflowY: "auto" }}>
      <Document file={file}>
        {Array.from(new Array(50)).map((_, index) => (
          <div key={index} onClick={() => setPage(index + 1)}>
            <Page pageNumber={index + 1} width={100} />
          </div>
        ))}
      </Document>
    </div>
  );
}
