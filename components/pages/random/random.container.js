import { connect } from "react-redux";
import Random from "./random";
import { fetchRandomGiphy } from "../../../actions/random-display";
import { showGiphy } from "../../../actions/giphy-display";

const mapStateToProps = state => ({
  giphy: state.random.giphy
});

const mapDispatchToProps = dispatch => ({
  onRandomSubmitted: () => dispatch(fetchRandomGiphy()),
  thumbnailClicked: giphy => dispatch(showGiphy(giphy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Random);
