import * as Types from "../actions/actionTypes";

export const showRandomGiphy = result => ({
  type: Types.SHOW_RANDOM_GIPHY,
  result
});

export const fetchRandomGiphy = () => ({
  type: Types.GET_RANDOM_GIPHY
});
