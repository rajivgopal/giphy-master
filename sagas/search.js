import { select, call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../actions/actionTypes";
import { searchSuccess, searchError } from "../actions/search";
import { showRandomGiphy } from "../actions/random-display";
import axios from "axios";

const API_KEY = "G3ZY5ClbaPyCkXOzSKPVzt9qijdzwEH5";
const selectSearchState = state => state.search;

function* doSearch() {
  try {
    const { currentOffset, searchTerm } = yield select(selectSearchState);

    let base_url = "https://api.giphy.com/v1/gifs/search";
    const params = {
      api_key: API_KEY,
      q: searchTerm,
      limit: 50,
      offset: currentOffset
    };

    if (searchTerm === undefined) {
      base_url = "https://api.giphy.com/v1/gifs/trending";
      params.q = null;
    }

    const results = yield call(axios.get, base_url, {
      headers: {},
      params
    });

    yield put(searchSuccess(results.data.data));
  } catch (error) {
    yield put(searchError());
  }
}

function* getRandomGihpy() {
  try {
    const url = "https://api.giphy.com/v1/gifs/random";

    const result = yield call(axios.get, url, {
      headers: {},
      params: { api_key: API_KEY }
    });

    console.log(result.data.data);
    yield put(showRandomGiphy(result.data.data));
  } catch (e) {
    console.log(e);
  }
}

export default function*() {
  yield takeLatest(Types.PERFORM_SEARCH, doSearch);
  yield takeLatest(Types.GET_RANDOM_GIPHY, getRandomGihpy);
}
