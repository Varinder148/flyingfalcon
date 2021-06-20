import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Gamepage from "./pages/gamePage/gamepage.page";
import { loadGame } from "./redux/game/game.action";

const App = ({ loadGame }) => {
  loadGame();
  return (
    <>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Gamepage} />
          <Route exact path="*" render={()=><h2>You seem to be lost,me friend</h2>} />
        </Switch>
      </HashRouter>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGame()),
});

export default connect(null, mapDispatchToProps)(App);
