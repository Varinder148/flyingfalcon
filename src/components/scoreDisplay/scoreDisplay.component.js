import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTimeTaken } from "../../redux/player/player.selector";

const ScoreDisplay = ({ selectTimeTaken }) => (
  <>
    Time Taken:
    {selectTimeTaken ? selectTimeTaken : 0}
  </>
);

const mapStateToProps = createStructuredSelector({
  selectTimeTaken,
});

export default connect(mapStateToProps)(ScoreDisplay);
