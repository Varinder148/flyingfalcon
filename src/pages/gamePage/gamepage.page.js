import "./gamepage.style.scss";
import SelectionHolder from "../../components/selectionHolder/selectionHolder.component";
import ScoreDisplay from "../../components/scoreDisplay/scoreDisplay.component";
import {
  launchSearchAsync,
  resetFullGame,
} from "../../redux/player/player.action";
import { connect } from "react-redux";
import MsgBox from "../../components/msgBox/msgBox.component";
import { selectResult } from "../../redux/game/game.selector";
import { createStructuredSelector } from "reselect";

const Gamepage = ({ selectResult, launchSearchAsync }) => (
  <>
    <MsgBox />
    <div className="gamepage">
      <div className="selectors">
        <div>
          <SelectionHolder selectorId={1} />
        </div>
        <div>
          <SelectionHolder selectorId={2} />
        </div>
        <div>
          <SelectionHolder selectorId={3} />
        </div>
        <div>
          <SelectionHolder selectorId={4} />
        </div>
      </div>
      <div className="score-display">
        <ScoreDisplay />
      </div>
      <button
        className="submit"
        onClick={launchSearchAsync}
        disabled={selectResult.isFetching}
      >
        Deploy the troops
      </button>
    </div>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  launchSearchAsync: () => dispatch(launchSearchAsync()),
  resetFullGame: () => dispatch(resetFullGame()),
});

const mapStateToProps = createStructuredSelector({
  selectResult
})
export default connect(mapStateToProps, mapDispatchToProps)(Gamepage);
