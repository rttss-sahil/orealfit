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

    case actionTypes.removeProductFromCart:
      console.log(action.payload);
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
  console.log("here");
  await fetch(api.apiUrl + "/cart/" + link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => data.message);
  console.log("here");
};

export default Cart;
