import * as Types from "../actions/actionTypes";
import { LOCATION_CHANGE } from "connected-react-router";

const INITIAL_STATE = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
  isLoading: false,
  isActive: false
};

function searchFormTransformer(rawData) {
  const { images, id } = rawData;
  return {
    id,
    thumbnail: images.fixed_height_small_still.url,
    full: images.original.url
  };
}
const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        currentOffset: state.currentOffset + 50,
        isLoading: false,
        isActive: action.results.length === 50,
        results: state.results.concat(action.results.map(searchFormTransformer))
      };
    case Types.NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.searchTerm,
        isLoading: true
      };
    case Types.PERFORM_SEARCH:
      return {
        ...state,
        isLoading: true
      };
    case Types.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false
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

export default SearchReducer;
