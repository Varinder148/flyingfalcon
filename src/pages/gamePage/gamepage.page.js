import "./gamepage.style.scss";
import SelectionHolder from "../../components/selectionHolder/selectionHolder.component";
import ScoreDisplay from "../../components/scoreDisplay/scoreDisplay.component";
import { launchSearchAsync } from "../../redux/player/player.action";
import { connect } from "react-redux";

const Gamepage = ({ launchSearchAsync }) => (
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
    <button className="submit" onClick={launchSearchAsync}>
      Deploy the troops
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  launchSearchAsync: () => dispatch(launchSearchAsync()),
});

export default connect(null, mapDispatchToProps)(Gamepage);
