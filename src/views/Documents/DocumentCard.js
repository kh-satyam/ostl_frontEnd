import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-react.js";
import PropTypes from "prop-types";
import Muted from "components/Typography/Muted";

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
  const classes = useStyles();

  const {
    id,
    title,
    author,
    description,
    date,
    link,
    documentType,
    viewCount,
    downloadCount
  } = props;
  const url = "/document/" + id;

  const cardBody = () => {
    return (
      <Link to={url}>
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          <Muted>
            <h5 className={classes.cardSubtitle}>
              <i className={"fa fa-user"}>
                &nbsp;
                {author}
                &nbsp;&nbsp;&nbsp;
              </i>
              <i className={"fa fa-calendar"}>
                &nbsp;
                {date !== undefined ? new Date(date).toDateString() : null}
                {/* &nbsp;&nbsp;&nbsp; */}
              </i>
              {/* <i className={"fa fa-folder-open"}>
              &nbsp;
              {documentType}
              &nbsp;&nbsp;&nbsp;
            </i> */}
            </h5>
          </Muted>
        </CardBody>
      </Link>
    );
  };

  return (
    <Card>
      <CardActionArea> {cardBody()} </CardActionArea>
    </Card>
  );
};

export default DocumentCard;

DocumentCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  documentType: PropTypes.string,
  viewCount: PropTypes.number,
  downloadCount: PropTypes.number
};
