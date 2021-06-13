import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Gamepage from "./pages/gamePage/gamepage.page";
import { fetchTokenAsync } from "./redux/game/game.action";

const App = ({ fetchToken }) => {
  fetchToken();
  return (
  <>
    {/* {console.log(fetchToken())} */}
    <Header />
    <Gamepage />
  </>
)}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchTokenAsync()),
});

export default connect(null, mapDispatchToProps)(App);
