import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Carousel from "components/Carousel/Carousel";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import NavBar from "../NavBar/NavBar";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{marginTop:"1%"}}>
      <Carousel/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <div className={classes.container}> */}
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <br></br>
        <Footer/>
        </GridItem>
        
      </GridContainer>
        {/* </div> */}
       </div>
       <br></br>
      
    </div>
  );
}
