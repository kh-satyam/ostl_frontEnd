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

// mapStateToProps = state => {
//   return {
//     token:state.token
//   }
// }

class AdminDashboard extends Component {

  constructor(props) {

    super(props);
    
    this.state = { authenticated: false };
  }
  
  hist = createBrowserHistory();

  componentDidMount() {
    //cookie.remove('ostlCookie', { path: '/' })
    var ostlCookie = cookie.load("ostlCookie");
    if (ostlCookie !== undefined) {
     
      if (ostlCookie['token'] !== "")
      {
        this.setState({ authenticated: true });
      }
        
    }
  }
  
  signInHandler(authenticationDetails) {

    axios.post('http://localhost:8086/authenticate', {
      "password": authenticationDetails.password,
      "userName": authenticationDetails.userName
      }).then((response) => {
        let ostlCookie = {};
        ostlCookie['token'] = response.data.token;
        ostlCookie['protocol'] = "http";
        ostlCookie['domain'] = 'localhost:8086';
        cookie.save("ostlCookie",JSON.stringify(ostlCookie), { path: '/' });
        
        //this.hist.push('/admin');
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid Credentials");
      });
  }

  render() {
    console.log(this.state.authenticated);
    let components;
    if(this.state.authenticated) {
      console.log(" strue");
      components = <div style={{ margin: "10%" }}>
      <NavPills
        tabs={[
          {
            tabButton: "Upload Document",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update Publications",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update Projects",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update Thesis",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update Articles",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update News",
            tabContent: <DocumentInputComponent />
          },
          {
            tabButton: "Update CorporateCollaboration",
            tabContent: <DocumentInputComponent />
          }
        ]}
      />
    </div>;
    }else{
      console.log("s false");
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