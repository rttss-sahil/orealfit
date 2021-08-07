import actionTypes from "../actions/actionTypes";
import api from "../../lib/api";

const initialState = [];

const Cart = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addDirectlyToCart:
      if (action.payload.length > 0) {
        state = action.payload;
      } else {
        return state;
      }
      return state;

    case actionTypes.addProductToCart:
      if (!state.some((item) => item.id === action.payload.product.id)) {
        newState = [...state, action.payload.product];
        fetchCart(
          "add",
          JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          })
          );
        return newState;
      }
      return state;

    case actionTypes.changeProductInCart:
      console.log('here')
      const index = state.findIndex(item => item.id === action.payload.product.id)
      console.log(index)
      if (index >= 0){
        newState = [...state];
        newState[index].quantity = action.payload.product.quantity;
        return newState;
      }
      return state;
      

    case actionTypes.removeProductFromCart:
      if (state.some((item) => item.id === action.payload.product.id)) {
        newState = [...state].filter(
          (item) => item.id !== action.payload.product.id
        );
        fetchCart(
          "remove",
          JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          })
        );
        return newState;
      }
      return state;

    case actionTypes.removeAllFromCart:
      newState = [];
      return newState;

    default:
      return state;
  }
};

const fetchCart = async (link, body) => {
  await fetch(api.apiUrl + "/cart/" + link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => data.message);
};

export default Cart;
