import { createBrowserHistory } from "history";

import React from "react";
import Header from "./Header.js";
import HeaderLinks from "./HeaderLinks.js";

const NavBar = () => {
  var hist = createBrowserHistory();
  const dashboardRoutes = [];

  return (
    <Header
      color="dark"
      routes={dashboardRoutes}
      brand="OSTL @ IIIT,Bangalore   Admin Dashboard"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
    />
  );
};

export default NavBar;
