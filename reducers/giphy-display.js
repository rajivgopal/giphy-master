import * as Types from "../actions/actionTypes";

const INITIAL_STATE = {
  isGiphyShown: false,
  giphy: null
};

const GiphyDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SHOW_GIPHY:
      return {
        ...state,
        isGiphyShown: true,
        giphy: action.payload
      };
    case Types.HIDE_GIPHY:
      return {
        ...state,
        isGiphyShown: false,
        giphy: null
      };
    default:
      return state;
  }
};

export default GiphyDisplayReducer;
