import actionTypes from "../actions/actionTypes";

const initialState = { products: [] };

const Cart = (state = initialState, action) => {
  console.log("action triggered");
  let newState;
  switch (action.type) {
    case actionTypes.addProductToCart:
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;

    case actionTypes.removeProductFromCart:
      newState = { ...state };
      return newState;

    default:
      return state;
  }
};

export default Cart;
