import './App.style.scss'

import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Gamepage from "./pages/gamePage/gamepage.page";
import Homepage from "./pages/homePage/homepage.page";

import { loadGame } from "./redux/game/game.action";

const App = ({ loadGame }) => {
  loadGame();
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/game" component={Gamepage} />
          <Route
            exact
            path="/goodbye"
            render={() => (
              <h2 className="misc-messages">
                You made the right decision,me friend.
                <span />
                Now go, Shoo.
              </h2>
            )}
          />
          <Route
            exact
            path="*"
            render={() => (
              <h2 className="misc-messages">You seem to be lost,me friend</h2>
            )}
          />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGame()),
});

export default connect(null, mapDispatchToProps)(App);
