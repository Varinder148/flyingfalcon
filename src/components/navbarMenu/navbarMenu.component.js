import React from "react";
import { connect } from "react-redux";
import { resetFullGame } from "../../redux/player/player.action";
import "./navbarMenu.style.scss";

const NavbarMenu = ({ resetFullGame }) => {
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
