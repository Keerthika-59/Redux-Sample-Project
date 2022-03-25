import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import rootReducer from "../src/store/reducers/reducer1";
import { createStore } from "redux";

import App from "./App";
let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
