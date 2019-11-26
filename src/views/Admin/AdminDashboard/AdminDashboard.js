import React, { Component } from "react";
import AdminNavBar from "../NavBar/AdminNavBar.js";
import DocumentInputComponent from "./Components/DocumentInputComponent.js";
import { createBrowserHistory } from "history";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";
import cookie from 'react-cookies';
import axios from 'axios';
import LoginComponent from "./Components/LoginComponent";
import DocumentViewComponent from './Components/DocumentViewComponent';

// mapStateToProps = state => {
//   return {
//     token:state.token
//   }
// }

class AdminDashboard extends Component {

  constructor(props) {

    super(props);

    this.state = { authenticated: false };
    this.state = { publications: null };
  }

  hist = createBrowserHistory();

  componentDidMount() {
    //cookie.remove('ostlCookie', { path: '/' })
    var ostlCookie = cookie.load("ostlCookie");
    if (ostlCookie !== undefined) {

      if (ostlCookie['token'] !== "") {
        this.setState({ authenticated: true });
      }

    }
  }

  signInHandler(authenticationDetails) {

    axios.post('http://localhost:8086/authenticate', {
      "password": authenticationDetails.password,
      "userName": authenticationDetails.userName
    }).then((response) => {
      console.log("Logged in ");
      let ostlCookie = {};
      ostlCookie['token'] = response.data.token;
      ostlCookie['protocol'] = "http";
      ostlCookie['domain'] = 'localhost:8086';
      cookie.save("ostlCookie", JSON.stringify(ostlCookie), { path: '/' });

      //this.hist.push('/admin');
    })
      .catch(function (error) {
        console.log(error);
        alert("Invalid Credentials");
      });
  }

  render() {
    let components;
    if (this.state.authenticated == true) {
      components = <div style={{ margin: "10%" }}>
        <NavPills
          tabs={[
            {
              tabButton: "Upload Document",
              tabContent: <DocumentInputComponent />
            },
            {
              tabButton: "Update Publications",
              tabContent: <DocumentViewComponent type={"Publication"} />
            },
            {
              tabButton: "Update Projects",
              tabContent: <DocumentViewComponent type={"Project"} />
            },
            {
              tabButton: "Update Thesis",
              tabContent: <DocumentViewComponent type={"Thesis"}/>
            },
            {
              tabButton: "Update Articles",
              tabContent: <DocumentViewComponent type={"Article"}/>
            },
            {
              tabButton: "Update News",
              tabContent: <DocumentViewComponent type={"News"}/>
            },
            {
              tabButton: "Update CorporateCollaboration",
              tabContent: <DocumentViewComponent type={"corporateCollaboration"}/>
            }
          ]}
        />
      </div>;
    } else {
      components = <LoginComponent signInHandler={this.signInHandler} />;
    }
    return (
      <div >
        <AdminNavBar />
        {components}
      </div>
    );
  }

}

export default AdminDashboard;