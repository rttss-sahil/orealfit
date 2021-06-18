import { createStore, combineReducers } from "redux";
import Products from "./reducers/products";

const store = createStore(combineReducers({ products: Products }));

export default store;
