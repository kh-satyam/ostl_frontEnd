import React,{ Component } from "react";
import AdminNavBar from "../NavBar/AdminNavBar.js";
import DocumentInputComponent from "./Components/DocumentInputComponent.js";

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";
import cookie from 'react-cookies';

import LoginComponent from "./Components/LoginComponent";

// mapStateToProps = state => {
//   return {
//     token:state.token
//   }
// }

class AdminDashboard extends Component{

  constructor(props) {

    super(props);
    
    this.state = {authenticated:false};
  }

  componentDidMount() {
    //cookie.remove('ostlCookie', { path: '/' })
    var ostlCookie = cookie.load("ostlCookie");
    if(!ostlCookie === undefined) {
      this.setState({authenticated:true})
    }
  }
  
    render() {
        return(
            <div >
                <AdminNavBar/>
                <div style={{margin:"10%"}}>
                    <NavPills
              tabs={[
                {
                  tabButton: "Upload Document",
                  tabContent: <DocumentInputComponent/>
                },
                {
                  tabButton: "Update Publications",
                  tabContent: <DocumentInputComponent/>
                },
                {
                  tabButton: "Update Projects",
                  tabContent: <DocumentInputComponent/>
                },
                {
                  tabButton: "Update Thesis",
                  tabContent: <DocumentInputComponent/>
                },
                {
                  tabButton: "Update Articles",
                  tabContent: <DocumentInputComponent/>
                },
                {
                    tabButton: "Update News",
                    tabContent: <DocumentInputComponent/>
                  },
                  {
                    tabButton: "Update CorporateCollaboration",
                    tabContent: <DocumentInputComponent/>
                  }
              ]}
            />
                    
                </div>
            </div>
        );
    }

}

export default AdminDashboard;