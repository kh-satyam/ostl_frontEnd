import React, { useState, useEffect } from "react";
import DocumentCard from "./DocumentCard";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
import axios from "axios";
import PropTypes from "prop-types";

const DOCUMENT_LIST_BY_TYPE_URL = "https://localhost:8086/document/byType/";
const jwt =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWdtZWV0Nzg3QGdtYWlsLmNvbSIsImV4cCI6MTU3NDI4MzUzNiwiaWF0IjoxNTc0MjY1NTM2fQ.At6-i9lXmJPKYwVklpWQC7B2WDjE8Mp4mje74IXimQJXKoRABVqXuifetJ42oJDIy0efvbITt40TKdJDumI49g";
const config = {
  headers: {
    Authorization: "Bearer " + jwt
  }
};
const DocumentList = props => {
  const [data, setData] = useState({ documents: [], isFetching: true });
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // setData({ documents: data.documents, isFetching: true });
        const response = await axios.get(
          DOCUMENT_LIST_BY_TYPE_URL + props.type,
          config
        );
        setData({ documents: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ documents: data.documents, isFetching: false });
      }
    };
    fetchDocuments();
  }, []);
  console.log(data);
  return (
    <GridContainer
      style={{
        margin: "100px"
      }}
    >
      {data.documents.map(document => (
        <GridItem xs={12} md={6} key={document.id}>
          <DocumentCard
            id={document.id}
            title={document.title}
            description={document.description}
            date={document.date}
            link={document.link}
            documentType={document.dt}
            viewCount={document.viewCount}
            downloadCount={document.downloadCount}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default DocumentList;

DocumentList.propTypes = {
  type: PropTypes.string
};
