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

const DocumentView = props => {
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand(!expand);
  };

  const classes = useStyles();

  const { title, other, link } = props;

  const cardBody = () => {
    return (
      <CardBody>
        <h4 className={classes.cardTitle}>{title}</h4>
        {!expand ? (
          <h5 className={classes.cardSubtitle}>
            {title}, {other}, {link}
          </h5>
        ) : (
          <div>
            <p>
              <b>Coming for:</b> {title}
            </p>
            <p>
              <b>Company Domain:</b> {other}
            </p>
            <p>
              <b>Company Profile:</b> {link}
            </p>
            <div className={classes.textCenter}>
              <Link to={link} target="_blank">
                <Button round color="info">
                  View
                </Button>
              </Link>
              <Button round onClick={toggle} color="rose">
                Close
              </Button>
            </div>
          </div>
        )}
      </CardBody>
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

export default DocumentView;
