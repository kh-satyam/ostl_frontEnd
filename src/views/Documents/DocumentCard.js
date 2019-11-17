import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};
const useStyles = makeStyles(styles);

const DocumentCard = props => {
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand(!expand);
  };

  const classes = useStyles();

  const { title, other, link, id } = props;
  const url = "/document/" + id;

  const cardBody = () => {
    return (
      <Link to={url}>
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          {
            <h5 className={classes.cardSubtitle}>
              {title}, {other}, {link}
            </h5>
          }
        </CardBody>
      </Link>
    );
  };

  return (
    <Card>
      {!expand ? (
        <CardActionArea onClick={toggle}> {cardBody()} </CardActionArea>
      ) : (
        cardBody()
      )}
    </Card>
  );
};

export default DocumentCard;
