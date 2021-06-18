import "./App.css";
import { connect } from "react-redux";
import {BrowserRouter, Route,Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Gamepage from "./pages/gamePage/gamepage.page";
import ResultPage from "./pages/resultPage/resultPage.component"
import { loadGame } from "./redux/game/game.action";

const App = ({ loadGame }) => {
  loadGame();
  return (
    <>
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Gamepage} />
        <Route exact path='/result' component={ResultPage} />
      </Switch>
      </BrowserRouter>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGame()),
});

export default connect(null, mapDispatchToProps)(App);
