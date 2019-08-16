import { connect } from "react-redux";
import { newSearch, performSearch } from "../../actions/search";

function mapStateToProps(state) {
  return {
    isLoading: state.search.isLoading,
    isActive: state.search.isActive
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => {
      dispatch(newSearch(searchTerm)), dispatch(performSearch());
    },
    onInfiniteScroll: () => dispatch(performSearch())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
