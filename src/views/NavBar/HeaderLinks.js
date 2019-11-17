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
import { People,LibraryBooks,LaptopChromebook,AttachFile,ContactMail,
  Keyboard,Home,Help,Info } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
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
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink } 
        ><Home/>HOME
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/members"
          color="transparent"
          className={classes.navLink}
        ><People/>MEMBERS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/publications"
          color="transparent"
          className={classes.navLink}
        ><LibraryBooks/>PUBLICATIONS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/projects"
          color="transparent"
          className={classes.navLink}
        ><LaptopChromebook/>PROJECTS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/articles"
          color="transparent"
          className={classes.navLink}
        ><AttachFile/>ARTICLES
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/thesis"
          color="transparent"
          className={classes.navLink}
        ><ContactMail/>THESIS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/news"
          color="transparent"
          className={classes.navLink}
        ><Info/>NEWS
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        ><Keyboard/>LOGIN
          {/* <CloudDownload className={classes.icons} /> Download */}
        </Button>
      </ListItem>      
    </List>
  );
}
