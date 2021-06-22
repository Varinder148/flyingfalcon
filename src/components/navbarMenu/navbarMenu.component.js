import React from "react";
import "./navbarMenu.style.scss";

import { connect } from "react-redux";

import { resetFullGame } from "../../redux/player/player.action";

// Menu in the header
export const NavbarMenu = ({ resetFullGame }) => {
  return (
    <ul className="navbar">
      <li onClick={resetFullGame}>Reset</li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetFullGame: () => dispatch(resetFullGame()),
});

export default connect(null, mapDispatchToProps)(NavbarMenu);
