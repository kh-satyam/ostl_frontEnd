import React, { useState, useEffect } from "react";
import sampleFile from "assets/pdf/sample.pdf";

const DOCUMENT_URL = "https://localhost:8086/document";

const DocumentView = props => {
  const [numPages, setNumPages] = useState(100);

  return (
    <div style={{ margin: "80px" }}>
      <object
        width="80%"
        height="800px"
        data="http://www.africau.edu/images/default/sample.pdf"
        type="application/pdf"
      >
        {" "}
      </object>

      <p>Page 1 of {numPages}</p>
    </div>
  );
};

export default DocumentView;
