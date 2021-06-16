import "./App.css";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Gamepage from "./pages/gamePage/gamepage.page";
import { loadGame } from "./redux/game/game.action";

const App = ({ loadGame }) => {
  loadGame();
  return (
    <>
      <Header />
      <Gamepage />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGame()),
});

export default connect(null, mapDispatchToProps)(App);
