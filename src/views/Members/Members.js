import React from "react";
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import teamStyles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import profilePic from "assets/img/thangarajuProfilePic.jpg";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { tableMakeStyles } from '@material-ui/core/styles';



const Members = () => {

  const useStyles = makeStyles(styles);
  const useTeamStyles = makeStyles(teamStyles);
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  const imageClasses = classNames(
    teamClasses.imgRaised,
    teamClasses.imgRoundedCircle,
    teamClasses.imgFluid
  );



  const cardStyles = {
    ...imagesStyles,
    cardTitle,
  };

  const useCardStyles = makeStyles(cardStyles);
  const cardClasses = useCardStyles();



  const useTableStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

  function createData(name, email) {
    return { name,email};
  }
  const rows = [
  createData('Satyam Khare', "satyam.khare@iiitb.org"),
  createData('Jagmeet Singh', "jagmeet.singh@iiitb.org"),
  createData('Utkarsh Agrawal', "utkarsh.agrawal128@iiitb.org"),
  createData('Abhay Nanda', "abhay.nanda@iiitb.org"),
  createData('Karanbir Singh', "NA"),
];

  
  const tableClasses = useTableStyles();
  return (
    <div
      style={{
        margin: "150px"
      }}
    >
      {/* <Card plain> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img src={profilePic} alt="..." className={imageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          
          <Card style={{ width: "90%" }}>
            {/* <img
              style={{ height: "180px", width: "100%", display: "block" }}
              className={classes.imgCardTop}
              src="..."
              alt="Card-img-cap"
            /> */}
            <CardBody>
              <h4 className={classes.cardTitle}><b>Thangaraju B</b></h4>
              <p>Professor</p>
              <p>OSTL Lab Co-Ordinator and Mentor</p>
              <p>Email: b.thangaraju@iiitb.ac.in</p>
              <h3>Research Interests</h3>
              <p>Operating System, Embedded and Real Time Systems, Linux Kernel, DevOps, Container Technology and IoT.</p>
              {/* <Button color="primary">Do something</Button> */}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <br></br>
          <br></br>
          <br></br>
          <h5><b>OSTL LAB MEMBERS </b></h5>
        </GridItem>
        {/* <h4 className={classNames(classes.justifyCenter, classes.cardTitle)}>Professor. Thangaraju B</h4>
        <CardFooter className={classes.justifyCenter}>
          <Button type="button">Update Photo</Button>
        </CardFooter> */}
        {/* </Card> */}
      </GridContainer>
      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
};

export default Members;
