import actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};

const Wishlist = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProductToWishlist:
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;

    case actionTypes.removeProductFromWishlist:
      newState = { ...state };
      return newState;

    default:
      return state;
  }
};

export default Wishlist;
