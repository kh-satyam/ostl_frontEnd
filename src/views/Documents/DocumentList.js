import React from "react";
import DocumentCard from "./DocumentCard";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

const DocumentList = props => {
  const list = [
    {
      id: "1",
      title: "Google",
      other: "Software Development Engineer",
      link: "/my-profile"
    },
    {
      id: "2",
      title: "Microsoft",
      other: "Software Development Engineer",
      link: "/my-profile"
    }
  ];
  const classes = useStyles();
  return (
    <GridContainer
      style={{
        margin: "100px"
      }}
    >
      {list.map(document => (
        <GridItem xs={12} md={6} key={document.id}>
          <DocumentCard
            id={document.id}
            title={document.title}
            link={document.link}
            other={document.other}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default DocumentList;
