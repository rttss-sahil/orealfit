import { createStore, combineReducers } from "redux";
import product from "./reducers/product";
import productsList from "./reducers/productsList";
import wishlist from "./reducers/wishlist";
import cart from "./reducers/cart";
import checkout from "./reducers/checkout";

const store = createStore(
  combineReducers({ product, productsList, cart, wishlist, checkout })
);

export default store;
