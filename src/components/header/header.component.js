import React from "react";
import "./header.style.scss";

import NavbarMenu from "../navbarMenu/navbarMenu.component";

const Header = () => (
  <div className="header-wrapper">
    <header>
      <h2 className="logo">Flying Falcon</h2>
      <NavbarMenu />
    </header>
  </div>
);

export default Header;
