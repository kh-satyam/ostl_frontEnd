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


export class AdminDashboard extends Component{
    render() {
        return(
            <div >
                <AdminNavBar/>
                <div style={{margin:"10%"}}>
                    <DocumentInputComponent/>
                </div>
            </div>
        );
    }

}

export default AdminDashboard;