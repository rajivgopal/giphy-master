import * as Types from "../actions/actionTypes";
import { LOCATION_CHANGE } from "connected-react-router";

const INITIAL_STATE = {
  giphy: null
};

function searchFormTransformer(rawData) {
  const { images, id } = rawData;
  return {
    id,
    thumbnail: images.fixed_width_downsampled.url,
    full: images.original.url
  };
}

const RandomGiphyDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SHOW_RANDOM_GIPHY:
      return {
        ...state,
        giphy: searchFormTransformer(action.result)
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

export default RandomGiphyDisplayReducer;
