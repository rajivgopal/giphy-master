import { combineReducers } from "redux";
import SearchReducer from "./search";
import { connectRouter } from "connected-react-router";
import GiphyDisplayReducer from "./giphy-display";
import RandomGiphyDisplayReducer from "./random-display";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: SearchReducer,
    giphy: GiphyDisplayReducer,
    random: RandomGiphyDisplayReducer
  });
