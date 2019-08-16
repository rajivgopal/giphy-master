import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./app";
import { hideGiphy } from "../../actions/giphy-display";

function mapStateToProps(state) {
  return {
    isGiphyShown: state.giphy.isGiphyShown,
    giphy: state.giphy.giphy
  };  
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(hideGiphy())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
