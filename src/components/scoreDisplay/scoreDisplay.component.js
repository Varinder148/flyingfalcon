import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTimeTaken } from "../../redux/player/player.selector";

const ScoreDisplay = ({ selectTimeTaken }) => (
  <h2>
    Time Taken:
    {selectTimeTaken ? selectTimeTaken : 0}
  </h2>
);

const mapStateToProps = createStructuredSelector({
  selectTimeTaken,
});

export default connect(mapStateToProps)(ScoreDisplay);
