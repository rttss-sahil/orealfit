import actionTypes from "../actions/actionTypes";

const initialState = {};

const Checkout = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addAddressToCheckout:
      newState = { ...state, address: action.payload };
      return newState;

    case actionTypes.addPaymentToCheckout:
      newState = { ...state, payment: action.payload };
      return newState;

    case actionTypes.addProductToCheckout:
      newState = { ...state, products: action.payload };
      return newState;

    default:
      return state;
  }
};

export default Checkout;
