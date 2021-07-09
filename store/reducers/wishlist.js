import api from "../../lib/api";
import actionTypes from "../actions/actionTypes";

const initialState = [];

const Wishlist = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addDirectlyToWishlist:
      if (action.payload.length > 0) {
        state = action.payload;
      } else {
        return state;
      }
      return state;

    case actionTypes.addProductToWishlist:
      if (!state.some((item) => item.id === action.payload.product.id)) {
        return fetch(api.apiUrl + "/wishlist/add", {
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
              return newState;
            }
          });
      }
      return state;

    case actionTypes.removeProductFromWishlist:
      if (state.some((item) => item.id === action.payload.id)) {
        const message = fetch(api.apiUrl + "/wishlist/remove", {
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
          return newState;
        } else {
          return state;
        }
      }
      return state;

    default:
      return state;
  }
};

export default Wishlist;
