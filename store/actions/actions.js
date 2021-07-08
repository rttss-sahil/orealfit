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

  addUser: (payload) => ({
    type: actionTypes.addUser,
    payload,
  }),
  removeUser: (payload) => ({
    type: actionTypes.removeUser,
    payload,
  }),

  addMessage: (payload) => ({
    type: actionTypes.addMessage,
    payload,
  }),
  removeMessage: (payload) => ({
    type: actionTypes.removeMessage,
    payload,
  }),
  addError: (payload) => ({
    type: actionTypes.addError,
    payload,
  }),
  removeError: (payload) => ({
    type: actionTypes.removeError,
    payload,
  }),
};

export default actions;
