import "./gamepage.style.scss";
import SelectionHolder from "../../components/selectionHolder/selectionHolder.component";
import ScoreDisplay from "../../components/scoreDisplay/scoreDisplay.component";

const Gamepage = () => (
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
    <button className="submit">Deploy the troops</button>
    <div className="score-display">
      <ScoreDisplay />
    </div>
  </div>
);

export default Gamepage;
