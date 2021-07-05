import actionTypes from "../actions/actionTypes";

const initialState = [];

const Cart = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProductToCart:
      if (!state.some((item) => item.id === action.payload.id)) {
        newState = [...state, action.payload];
      } else {
        newState = state;
      }
      return newState;

    case actionTypes.removeProductFromCart:
      newState = [...state];
      return newState;

    default:
      return state;
  }
};

export default Cart;
