import React from "react";
import Home from "../components/Major/Home";
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
