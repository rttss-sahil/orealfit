import { createStore, combineReducers } from "redux";
import product from "./reducers/product";
import productsList from "./reducers/productsList";
import wishlist from "./reducers/wishlist";
import cart from "./reducers/cart";
import categories from "./reducers/categories";
import user from "./reducers/user";
import message from "./reducers/message";

const store = createStore(
  combineReducers({
    product,
    productsList,
    cart,
    wishlist,
    categories,
    user,
    message,
  })
);

export default store;
