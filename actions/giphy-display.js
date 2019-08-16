import * as Types from "../actions/actionTypes";

export const showGiphy = gihpy => ({
  type: Types.SHOW_GIPHY,
  payload: gihpy
});

export const hideGiphy = () => ({
  type: Types.HIDE_GIPHY
});
