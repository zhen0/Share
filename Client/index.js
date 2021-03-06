import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.js";

import { Provider } from "react-redux";
import store from "./store";

import "../public/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
