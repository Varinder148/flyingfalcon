import React from "react";
import "./header.style.scss";

import { withRouter } from "react-router";

import NavbarMenu from "../navbarMenu/navbarMenu.component";

const Header = ({ history }) => (
  <div className="header-wrapper">
    <header>
      <h2 className="logo" onClick={() => history.push("/")}>
        Flying Falcon
      </h2>
      <NavbarMenu />
    </header>
  </div>
);

export default withRouter(Header);
