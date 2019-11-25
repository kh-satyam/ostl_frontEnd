import React, { useState, useEffect } from "react";
import DocumentCard from "./DocumentCard";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
import axios from "axios";
import PropTypes from "prop-types";
import cookies from "react-cookies";

const DOCUMENT_LIST_BY_TYPE_URL = "http://localhost:8086/document/byType/";
const jwt =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmhheUBnbWFpbC5jb20iLCJleHAiOjE1NzU2NzI0ODcsImlhdCI6MTU3NDU5MjQ4N30.vqJKXZQcPPEANMr3-cRmGejLDcCYokYCEcu04hgeB7v0n2FoFs4Nwp2JOKBWzKTZ-B9BDkyV8KhhBTrfp6Ff3A";
// const config = {
//   headers: {
//     Authorization: "Bearer " + jwt
//   }
// };
const DocumentList = props => {
  const [data, setData] = useState({ documents: [], isFetching: true });
  useEffect(() => {
    var ostlCookie = cookies.load('ostlCookie');
    let protocol = ostlCookie['protocol'];
    let domain = ostlCookie['domain'];
    let token = ostlCookie['token'];
    let url = protocol + "://" + domain + "/document/byType/" + props.type;
    let config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    console.log(url);
    console.log(token);
    const fetchDocuments = async () => {
      try {
        // setData({ documents: data.documents, isFetching: true });
        const response = await axios.get(
          url,
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
  return (
    <GridContainer
      // style={{
      //   margin: "100px"
      // }}
    >
      {data.documents.map(document => (
        <GridItem xs={12} md={12} key={document.id}>
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
};

export default DocumentList;

DocumentList.propTypes = {
  type: PropTypes.string
};
