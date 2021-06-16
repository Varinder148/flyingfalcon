import "./gamepage.style.scss";
import SelectionHolder from "../../components/selectionHolder/selectionHolder.component";

const Gamepage = () => (
  <>
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
  </>
);

export default Gamepage;
