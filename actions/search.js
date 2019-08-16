import * as Types from "../actions/actionTypes";

export const searchError = () => ({
  type: Types.SEARCH_ERROR
});

export const newSearch = searchTerm => ({
  type: Types.NEW_SEARCH,
  searchTerm
});

export const searchSuccess = results => ({
  type: Types.SEARCH_SUCCESS,
  results
});

export const performSearch = () => ({
  type: Types.PERFORM_SEARCH
});

