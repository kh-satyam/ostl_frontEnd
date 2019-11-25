import React from "react";
import Header from "./Header.js";
import HeaderLinks from "./HeaderLinks.js";

const NavBar = () => {
  const dashboardRoutes = [];
  return (
    <Header
      color="dark"
      routes={dashboardRoutes}
      brand="OSTL @ IIITB"
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
