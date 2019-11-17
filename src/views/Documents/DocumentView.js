import React, { useState } from "react";
// import { ReactPDF, Document, Page } from "react-pdf";
// import PDFViewer from "pdf-viewer-reactjs";

import sampleFile from "assets/pdf/sample.pdf";

const DocumentView = props => {
  const [numPages, setNumPages] = useState(100);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = numPages => {
    setNumPages(numPages);
  };
  return (
    <div>
      {/* <Document file={sampleFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      {/* <PDFViewer
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf"
        }}
      /> */}
      <object
        width="80%"
        height="800px"
        style={{ margin: "80px" }}
        data="http://www.africau.edu/images/default/sample.pdf"
        type="application/pdf"
      >
        {" "}
      </object>

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default DocumentView;
