import React from "react";
import Home from "./home";
import { Provider } from "react-redux";
import store from "../store";

function index() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default index;
