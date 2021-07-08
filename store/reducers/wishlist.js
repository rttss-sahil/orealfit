import actionTypes from "../actions/actionTypes";

const initialState = [];

const Wishlist = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addDirectlyToWishlist:
      if (action.payload.length >= 0) {
        for (let i of action.payload) {
          newState.push(i);
        }
      } else {
        newState = { ...state };
      }
      return newState;

    case actionTypes.addProductToWishlist:
      if (!state.some((item) => item.id === action.payload.id)) {
        newState = [...state, action.payload];
      } else {
        newState = state;
      }
      return newState;

    case actionTypes.removeProductFromWishlist:
      if (state.some((item) => item.id === action.payload.id)) {
        newState = [...state].filter((item) => item.id !== action.payload.id);
      } else {
        newState = state;
      }
      return newState;

    default:
      return state;
  }
};

export default Wishlist;
