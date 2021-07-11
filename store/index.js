import { createStore, combineReducers } from "redux";
import product from "./reducers/product";
import productsList from "./reducers/productsList";
import wishlist from "./reducers/wishlist";
import cart from "./reducers/cart";
import categories from "./reducers/categories";
import user from "./reducers/user";
import message from "./reducers/message";
import addresses from "./reducers/addresses";

const reducer = combineReducers({
  product,
  productsList,
  cart,
  wishlist,
  categories,
  user,
  message,
  addresses,
});

const store = createStore(reducer);

export default store;
