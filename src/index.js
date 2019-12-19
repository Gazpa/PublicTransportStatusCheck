import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";
import history from "./history";

import App from "./components/App";
import reducers from "./reducers";

import "./styles/src/bootstrap.min.css";
import "./styles/src/plugins.css";
import "./styles/src/main.css";
import "./styles/index.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
