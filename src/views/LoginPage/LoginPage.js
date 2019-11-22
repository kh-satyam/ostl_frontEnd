import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { createBrowserHistory } from "history";
// import {connect} from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import cookie from 'react-cookies';
import axios from 'axios';
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);



const LoginPage = (props) => {

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hist = createBrowserHistory();

  const signInHandler = () => {

    if(email === "") {
      alert("email cannot be empty");
    }
    else if(password === "") {
      alert("password cannot be empty")
    }
    else{
      axios.post('http://localhost:8086/authenticate', {
      "password": password,
      "userName": email
      }).then((response) => {
      console.log(response);
      var ostlCookie = {};
      ostlCookie['token'] = response.data.token;
      ostlCookie['protocol'] = "http";
      ostlCookie['domain'] = 'localhost:8086';
      cookie.save("ostlCookie",JSON.stringify(ostlCookie), { path: '/' });
      hist.push("/");
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid Credentials");
      });
    }
  }
  return (
    <div>
      {/* <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <a href="/signup-page">
                    <CardHeader color="success" className={classes.cardHeader}>
                      <h4>Click to Register</h4>
                      <div className={classes.socialLine}>
                        {/* <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button> */}
                      </div>
                    </CardHeader>
                  </a>
                  <p className={classes.divider}>Enter your Credentials</p>
                  <CardBody>
                    {/* <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    /> */}
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        defaultValue : email,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        onChange: (event) => setEmail(event.target.value)
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        defaultValue : password,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        onChange: (event) => setPassword(event.target.value),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="success" size="lg" onClick={signInHandler}>
                      Sign In
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* <Footer whiteFont /> */}
      </div>
    </div>
  );
};


// const mapStateToProps = state => {
//   return {
//     token:state.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addToken: () => dispatch({type:"ADD_BEARER_TOKEN",payload:"random"})
//   };
// };

export default LoginPage;
