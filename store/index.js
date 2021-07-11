import { createStore, combineReducers } from "redux";
import product from "./reducers/product";
import productsList from "./reducers/productsList";
import wishlist from "./reducers/wishlist";
import cart from "./reducers/cart";
import categories from "./reducers/categories";
import user from "./reducers/user";
import message from "./reducers/message";
import addresses from "./reducers/addresses";
import checkout from "./reducers/checkout";
import shipments from "./reducers/shipments";

const reducer = combineReducers({
  product,
  productsList,
  cart,
  wishlist,
  categories,
  user,
  message,
  addresses,
  checkout,
  shipments,
});

const store = createStore(reducer);

export default store;
