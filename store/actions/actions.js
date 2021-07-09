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
  addDirectlyToWishlist: (payload) => ({
    type: actionTypes.addDirectlyToWishlist,
    payload,
  }),
  removeProductFromWishlist: (payload) => ({
    type: actionTypes.removeProductFromWishlist,
    payload,
  }),
  removeAllFromWishlist: (payload) => ({
    type: actionTypes.removeAllFromWishlist,
    payload,
  }),

  addProductToCart: (payload) => ({
    type: actionTypes.addProductToCart,
    payload,
  }),
  addDirectlyToCart: (payload) => ({
    type: actionTypes.addDirectlyToCart,
    payload,
  }),
  removeProductFromCart: (payload) => ({
    type: actionTypes.removeProductFromCart,
    payload,
  }),
  removeAllFromCart: (payload) => ({
    type: actionTypes.removeAllFromCart,
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
