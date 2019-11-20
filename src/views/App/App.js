import React, { Component } from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import NavBar from "../NavBar/NavBar";
import LoginPage from "views/LoginPage/LoginPage.js";
import DocumentList from "views/Documents/DocumentList.js";
import DocumentView from "views/Documents/DocumentView.js";
import AdminDashBoard from "views/Admin/AdminDashboard/AdminDashboard.js";
export class App extends Component {
  hist = createBrowserHistory();
  state = {
    authenticated: false
  };

  signInHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  signOutHandler = () => {
    this.setState({
      authenticated: false
    });
  };

  render() {
    return (
      <div>
        <Router history={this.hist}>
          <NavBar />
          <Route
            exact
            path="/login"
            component={() => <LoginPage signIn={this.signInHandler} />}
          />
          <Route path="/admin" component={AdminDashBoard} />
          <Route
            path="/publications"
            component={() => <DocumentList type="Publication" />}
          />
          <Route
            path="/projects"
            component={() => <DocumentList type="Project" />}
          />
          <Route
            path="/articles"
            component={() => <DocumentList type="Article" />}
          />
          <Route
            path="/thesis"
            component={() => <DocumentList type="Thesis" />}
          />
          <Route path="/document/:id" component={DocumentView} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route exact path="/" component={LandingPage} />
        </Router>
      </div>
    );
  }
}

export default App;
