import { connect } from "react-redux";
import SearchResults from "./search-results";
import { showGiphy } from "../../actions/giphy-display";

const mapStateToProps = state => ({
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  displayGiphy: giphy => dispatch(showGiphy(giphy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
