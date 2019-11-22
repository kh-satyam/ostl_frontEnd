import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import tooltipStyles from "assets/jss/material-kit-react/tooltipsStyle.js";
import Muted from "components/Typography/Muted";

const DOCUMENT_URL = "https://localhost:8086/document/";
const jwt =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWdtZWV0Nzg3QGdtYWlsLmNvbSIsImV4cCI6MTU3NDM4NTYxMSwiaWF0IjoxNTc0MzY3NjExfQ.8YhIL5aAoM5Oe2d4F2kKwKQ7Cv7F62sZNGjf2a7xlVY2H8Pbb4hCTOM-qk6QPFEZx0MATpOeE0dpTvJcN4fWnQ";
const config = {
  headers: {
    Authorization: "Bearer " + jwt
  }
};

const useStyles = makeStyles(styles);
const useTooltipStyles = makeStyles(tooltipStyles);

const DocumentView = props => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    console.log("handle download");
  };

  const [data, setData] = useState({ document: {}, isFetching: true });

  const classes = useStyles();
  const tooltipClasses = useTooltipStyles();

  const documentId = props.match.params.id;

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(DOCUMENT_URL + documentId, config);
        setData({ document: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ documents: data.documents, isFetching: false });
      }
    };
    fetchDocument();
  }, []);

  console.log(data.document);

  return (
    <GridContainer
      style={{
        margin: "100px",
        background: "white"
      }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <GridItem style={{ margin: "20px" }}>
        <Tooltip
          id="tooltip-bottom-author"
          title="Title"
          placement="bottom"
          classes={{ tooltip: tooltipClasses.tooltip }}
        >
          <h2>{data.document.title}</h2>
        </Tooltip>
        <div>
          <Muted>
            <Tooltip
              id="tooltip-bottom-author"
              title="Author(s)"
              placement="bottom"
              classes={{ tooltip: tooltipClasses.tooltip }}
            >
              <i className={"fa fa-user"}>
                &nbsp;
                {data.document.author}
                &nbsp;&nbsp;&nbsp;
              </i>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom-published-on"
              title="Published On"
              placement="bottom"
              classes={{ tooltip: tooltipClasses.tooltip }}
            >
              <i className={"fa fa-calendar"}>
                &nbsp;
                {data.document.date !== undefined
                  ? new Date(data.document.date).toDateString()
                  : null}
                &nbsp;&nbsp;&nbsp;
              </i>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom-dt"
              title="Document Type"
              placement="bottom"
              classes={{ tooltip: tooltipClasses.tooltip }}
            >
              <i className={"fa fa-folder-open"}>
                &nbsp;
                {data.document.dt}
                &nbsp;&nbsp;&nbsp;
              </i>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom-views"
              title="Views"
              placement="bottom"
              classes={{ tooltip: tooltipClasses.tooltip }}
            >
              <i className={"fa fa-eye"}>
                &nbsp;
                {data.document.viewCount}
              </i>
            </Tooltip>
          </Muted>
          <Tooltip
            id="tooltip-bottom-author"
            title="Description"
            placement="bottom"
            classes={{ tooltip: tooltipClasses.tooltip }}
          >
            <p style={{ marginTop: "20px" }}>{data.document.description}</p>
          </Tooltip>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="rose" onClick={handleClickOpen}>
            View
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button color="success" onClick={handleDownload}>
            Download
          </Button>
        </div>
        <i style={{ marginTop: "20px" }} className={"fa fa-link"}>
          &nbsp; [1] &nbsp;
          <a href={data.document.link} target="_blank">
            {data.document.link}
          </a>
        </i>
      </GridItem>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {data.document.title}
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <object
              width="100%"
              height="1024px"
              data="http://www.africau.edu/images/default/sample.pdf"
              type="application/pdf"
            ></object>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
};

export default DocumentView;
