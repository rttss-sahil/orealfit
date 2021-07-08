import actionTypes from "../actions/actionTypes";
import api from "../../lib/api";

const initialState = [];

const Cart = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addDirectlyToCart:
      console.log(action.payload);
      if (action.payload.length >= 0) {
        for (let i of action.payload) {
          newState.push(i);
        }
      } else {
        newState = { ...state };
      }
      return newState;

    case actionTypes.addProductToCart:
      if (!state.some((item) => item.id === action.payload.id)) {
        newState = [...state, action.payload];
      } else {
        newState = state;
      }
      return newState;

    case actionTypes.removeProductFromCart:
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

export default Cart;
