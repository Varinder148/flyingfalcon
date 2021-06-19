import { connect } from "react-redux";
import "./msgBox.style.scss";
import { selectResult } from "../../redux/game/game.selector";

import { createStructuredSelector } from "reselect";

const MsgBox = ({ selectResult }) => (
  <div className={`msg ${selectResult.error === "" && selectResult.value.includes("found") ? "green" : "red"}`}>
    {selectResult.error !== "" ? selectResult.error : selectResult.value}
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectResult,
});
export default connect(mapStateToProps)(MsgBox);
