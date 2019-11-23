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

import { createBrowserHistory } from "history";
import cookie from 'react-cookies';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { People,LibraryBooks,LaptopChromebook,AttachFile,ContactMail,
  Keyboard,Home,Help,Info } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const hist = createBrowserHistory();
  const signOutHandler = () => {
    cookie.remove('ostlCookie',{path : '/'});
    hist.push("/");
  }


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
              to="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink } 
        ><Home/>HOME
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link
          to="/members"
          color="transparent"
          className={classes.navLink}
        ><People style = {{ fontSize:"1.2rem"}}/>&nbsp;MEMBERS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        {/* <Link to="/publications"  className={classes.navLink}> */}
        <Link
          color="transparent"
          to="/publications"  
          className={classes.navLink}
        ><LibraryBooks style = {{ fontSize:"1.2rem"}}/>&nbsp;PUBLICATIONS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Link
          to="/projects"
          color="Linkarent"
          className={classes.navLink}
        ><LaptopChromebook style = {{ fontSize:"1.2rem"}}/>&nbsp;PROJECTS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Link
          to="/articles"
          color="transparent"
          className={classes.navLink}
        ><AttachFile style = {{ fontSize:"1.2rem"}}/>&nbsp;ARTICLES
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Link
          to="/thesis"
          color="transparent"
          className={classes.navLink}
        ><ContactMail style = {{ fontSize:"1.2rem"}}/>&nbsp;THESIS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Link
          to="/news"
          color="transparent"
          className={classes.navLink}
        ><Info style = {{ fontSize:"1.2rem"}}/>&nbsp;NEWS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Link
          to="/login"
          color="transparent"
          className={classes.navLink}
        ><Keyboard style = {{ fontSize:"1.2rem"}}/>&nbsp;LOGIN
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link
          color="transparent"
          className={classes.navLink}
          onClick = {signOutHandler}
        ><Keyboard style = {{ fontSize:"1.2rem"}}/>&nbsp;LOGOUT
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Link>
      </ListItem>      
    </List>
  );
}
