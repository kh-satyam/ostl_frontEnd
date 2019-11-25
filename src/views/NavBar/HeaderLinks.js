import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { createBrowserHistory } from "history";
import cookies from "react-cookies";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {
  People,
  LibraryBooks,
  LaptopChromebook,
  AttachFile,
  ContactMail,
  Keyboard,
  Home,
  Help,
  Info
} from "@material-ui/icons";

const useStyles = makeStyles(styles);

const ostlCookie = cookies.load("ostlCookie");
const authenticated = ostlCookie !== undefined && ostlCookie["token"] !== "";

export default function HeaderLinks(props) {
  const classes = useStyles();

  const hist = createBrowserHistory();
  const signOutHandler = () => {
    console.log("signOutHandler");
    cookies.remove("ostlCookie", { path: "/" });
    window.location.reload();
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/members" color="transparent" className={classes.navLink}>
          <People style={{ fontSize: "1.2rem" }} />
          &nbsp;MEMBERS
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          color="transparent"
          to="/publications"
          className={classes.navLink}
        >
          <LibraryBooks style={{ fontSize: "1.2rem" }} />
          &nbsp;PUBLICATIONS
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/projects" color="Linkarent" className={classes.navLink}>
          <LaptopChromebook style={{ fontSize: "1.2rem" }} />
          &nbsp;PROJECTS
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/articles" color="transparent" className={classes.navLink}>
          <AttachFile style={{ fontSize: "1.2rem" }} />
          &nbsp;ARTICLES
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/thesis" color="transparent" className={classes.navLink}>
          <ContactMail style={{ fontSize: "1.2rem" }} />
          &nbsp;THESIS
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/news" color="transparent" className={classes.navLink}>
          <Info style={{ fontSize: "1.2rem" }} />
          &nbsp;NEWS
        </Link>
      </ListItem>
      {!authenticated && (
        <ListItem className={classes.listItem}>
          <Link to="/login" color="transparent" className={classes.navLink}>
            <Keyboard style={{ fontSize: "1.2rem" }} />
            &nbsp;LOGIN
          </Link>
        </ListItem>
      )}
      {authenticated && (
        <ListItem className={classes.listItem}>
          <Link
            to="#"
            color="transparent"
            className={classes.navLink}
            onClick={signOutHandler}
          >
            <Keyboard style={{ fontSize: "1.2rem" }} />
            &nbsp;LOGOUT
          </Link>
        </ListItem>
      )}
    </List>
  );
}
