import actionTypes from "./actionTypes";

const actions = {
  addProductsToPage: (payload) => ({
    type: actionTypes.addProductToPage,
    payload,
  }),
  removeProductFromPage: (paylaod) => ({
    type: actionTypes.removeProductFromPage,
    payload,
  }),
  addProductToWishlist: (payload) => ({
    type: actionTypes.addProductToWishlist,
    payload,
  }),
  removeProductFromWishlist: (payload) => ({
    type: actionTypes.removeProductFromWishlist,
    payload,
  }),
  addProductToCart: (payload) => ({
    type: actionTypes.addProductToCart,
    payload,
  }),
  removeProductFromCart: (payload) => ({
    type: actionTypes.removeProductFromCart,
    payload,
  }),
  loginUser: (payload) => ({
    type: actionTypes.loginUser,
    payload,
  }),
  signupUser: (payload) => ({
    type: actionTypes.signupUser,
    payload,
  }),
  removeUser: (payload) => ({
    type: actionTypes.removeUser,
    payload,
  }),
};

export default actions;
