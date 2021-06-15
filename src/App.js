import "./App.css";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Gamepage from "./pages/gamePage/gamepage.page";
import {
  fetchTokenAsync,
  fetchPlanetsAsync,
  fetchVehiclesAsync,
} from "./redux/game/game.action";

const App = ({ fetchToken,fetchPlanetsAsync,fetchVehiclesAsync }) => {
  // fetchToken();
  fetchPlanetsAsync();
  fetchVehiclesAsync();
  return (
    <>
      <Header />
      <Gamepage />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchTokenAsync()),
  fetchPlanetsAsync: () => dispatch(fetchPlanetsAsync()),
  fetchVehiclesAsync: () => dispatch(fetchVehiclesAsync()),
});

export default connect(null, mapDispatchToProps)(App);
