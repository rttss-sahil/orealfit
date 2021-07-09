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
        const message = fetch(api.apiUrl + "/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "OK") {
              newState = [...state, action.payload];
            }
          });
        return newState;
      }
      return state;

    case actionTypes.removeProductFromCart:
      if (state.some((item) => item.id === action.payload.id)) {
        const message = fetch(api.apiUrl + "/cart/remove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => data.message);
        console.log(message);
        if (message === "OK") {
          newState = [...state].filter((item) => item.id !== action.payload.id);
        } else {
          return state;
        }
      }
      return newState;

    default:
      return state;
  }
};

export default Cart;
