import React, { useState, useEffect } from "react";
import DocumentCard from "./DocumentCard";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
import axios from "axios";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

const URL = "http://localhost:8086/document/listing/";

const DocumentList = props => {
  const [data, setData] = useState({ documents: [], isFetching: true });

  const loading = () => (
    <div
      style={{
        position: "fixed",
        top: "45%",
        left: "45%"
      }}
    >
      <CircularProgress style={{ marginLeft: "5px" }} disableShrink />;
      <br />
      Loading...
    </div>
  );

  const emptyList = () => (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "40%",
        maxWidth: "500px",
        textAlign: "center"
      }}
    >
      <Card>
        <CardHeader color="warning">No Documents</CardHeader>
        <CardBody>No documents available to list.</CardBody>
      </Card>
    </div>
  );

  const documentCards = () => (
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
            author={document.author}
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

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // setData({ documents: data.documents, isFetching: true });
        const response = await axios.get(URL + props.type);
        setData({ documents: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ documents: data.documents, isFetching: false });
      }
    };
    fetchDocuments();
  }, []);

  return data.isFetching
    ? loading()
    : data.documents.length == 0
    ? emptyList()
    : documentCards();
};

export default DocumentList;

DocumentList.propTypes = {
  type: PropTypes.string
};
