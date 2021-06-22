import "./gamepage.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  launchSearchAsync,
  resetFullGame,
} from "../../redux/player/player.action";
import SelectionHolder from "../../components/selectionHolder/selectionHolder.component";
import { selectResult } from "../../redux/game/game.selector";

import ScoreDisplay from "../../components/scoreDisplay/scoreDisplay.component";
import MsgBox from "../../components/msgBox/msgBox.component";

const Gamepage = ({ selectResult, launchSearchAsync, resetFullGame }) => {
  const selectorIds = [1, 2, 3, 4];

  return (
    <>
      <MsgBox />
      <div className="gamepage">
        <div className="selectors">
          {selectorIds.map((selectorId) => (
            <div key={selectorId}>
              <SelectionHolder selectorId={selectorId} />
            </div>
          ))}
        </div>
        <div className="score-display">
          <ScoreDisplay />
        </div>
        {selectResult.value === "" && (
          <button
            className="submit"
            onClick={launchSearchAsync}
            disabled={selectResult.isFetching}
          >
            Deploy the troops
          </button>
        )}
        {selectResult.value !== "" && (
          <button className="submit" onClick={resetFullGame}>
            New Game?
          </button>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  launchSearchAsync: () => dispatch(launchSearchAsync()),
  resetFullGame: () => dispatch(resetFullGame()),
});

const mapStateToProps = createStructuredSelector({
  selectResult,
});
export default connect(mapStateToProps, mapDispatchToProps)(Gamepage);
