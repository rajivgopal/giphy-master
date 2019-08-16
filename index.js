import "babel-regenerator-runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.container";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/search";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import SearchPage from "./components/pages/search/search.container";
import Random from "./components/pages/random/random.container";
import Trending from "./components/pages/trending/trending.container";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(history),
  applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={SearchPage} />
        <Route path="/trending" component={Trending} />
        <Route path="/random" component={Random} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);

sagaMiddleware.run(rootSaga);
