/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import cookies from "react-cookies";
import { createBrowserHistory } from "history";

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
    cookies.remove("ostlCookie", { path: "/" });
    window.location.reload();
  };

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      {authenticated && (
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            className={classes.navLink}
            onClick={signOutHandler}
          >
            <Keyboard />
            LOGOUT
            {/* <CloudDownload className={classes.icons} /> Download */}
          </Button>
        </ListItem>
      )}
    </List>
  );
}
