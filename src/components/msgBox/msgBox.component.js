import "./msgBox.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectResult } from "../../redux/game/game.selector";

// The box below the Header
export const MsgBox = ({ selectResult }) => (
  <div className="msg-offset">
    <div
      className={`msg ${
        selectResult.error === "" && selectResult.value.includes("found")
          ? "green"
          : "red"
      }`}
    >
      {selectResult.error !== "" ? selectResult.error : selectResult.value}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectResult,
});
export default connect(mapStateToProps)(MsgBox);
