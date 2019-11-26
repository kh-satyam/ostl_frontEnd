import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import App from "./views/App/App";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { createStore } from 'redux';
import reducer from "./views/reduxStore/reducer";
import { Provider } from 'react-redux';
var hist = createBrowserHistory();
const dashboardRoutes = [];

// const store = createStore(reducer);

// ReactDOM.render(
//   <Router history={hist}>
//     <Header
//       color="dark"
//       routes={dashboardRoutes}
//       brand="IIIT,Bangalore"
//       rightLinks={<HeaderLinks />}
//       fixed
//       changeColorOnScroll={{
//         height: 400,
//         color: "white"
//       }}
//     />
//     <Switch>
//       <Route path="/landing-page" component={LandingPage} />
//       <Route path="/profile-page" component={ProfilePage} />
//       <Route path="/login-page" component={LoginPage} />
//       <Route path="/" component={Components} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));