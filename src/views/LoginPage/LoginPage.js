import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import { Redirect } from "react-router-dom";
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
import cookie from "react-cookies";
import axios from "axios";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const LoginPage = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const signInHandler = () => {
    if (email === "") {
      alert("email cannot be empty");
    } else if (password === "") {
      alert("password cannot be empty");
    } else {
      let authenticationDetails = { userName: email, password: password };
      axios
        .post("https://localhost:8086/authenticate", {
          password: authenticationDetails.password,
          userName: authenticationDetails.userName
        })
        .then(response => {
          console.log("Logged in ");
          let ostlCookie = {};
          ostlCookie["token"] = response.data.token;
          ostlCookie["protocol"] = "https";
          ostlCookie["domain"] = "localhost:8086";
          cookie.save("ostlCookie", JSON.stringify(ostlCookie), { path: "/" });
          setRedirect(true);
        })
        .catch(function(error) {
          console.log(error);
          alert("Invalid Credentials");
        });
    }
  };
  return redirect ? (
    <Redirect to="/" />
  ) : (
    <div>
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
                      <div className={classes.socialLine}></div>
                    </CardHeader>
                  </a>
                  <p className={classes.divider}>Enter your Credentials</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        defaultValue: email,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        onChange: event => setEmail(event.target.value)
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
                        defaultValue: password,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        onChange: event => setPassword(event.target.value),
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
      </div>
    </div>
  );
};
export default LoginPage;
