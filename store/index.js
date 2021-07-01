import { createStore, combineReducers } from "redux";
import product from "./reducers/product";
import productsList from "./reducers/productsList";
import wishlist from "./reducers/wishlist";
import cart from "./reducers/cart";
import checkout from "./reducers/checkout";
import categories from "./reducers/categories";

const store = createStore(
  combineReducers({
    product,
    productsList,
    cart,
    wishlist,
    checkout,
    categories,
  })
);

export default store;
