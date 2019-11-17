import React, { Component } from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import NavBar from "../NavBar/NavBar";
import LoginPage from "views/LoginPage/LoginPage.js";
import DocumentList from "views/Documents/DocumentList.js";
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
          <Route
            path="/publications"
            type="publications"
            component={DocumentList}
          />
          <Route path="/projects" type="projects" component={DocumentList} />
          <Route path="/articles" type="articles" component={DocumentList} />
          <Route path="/thesis" type="thesis" component={DocumentList} />

          <Route path="/profile-page" component={ProfilePage} />
          <Route exact path="/" component={LandingPage} />
        </Router>
      </div>
    );
  }
}

export default App;
