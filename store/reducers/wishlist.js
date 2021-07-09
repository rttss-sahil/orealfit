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
        newState = [...state, action.payload.product];
        fetchWishlist(
          "add",
          JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          })
        );
        return newState;
      }
      return state;

    case actionTypes.removeProductFromWishlist:
      if (state.some((item) => item.id === action.payload.product.id)) {
        newState = [...state].filter(
          (item) => item.id !== action.payload.product.id
        );
        fetchWishlist(
          "remove",
          JSON.stringify({
            product: action.payload.product,
            email: action.payload.email,
          })
        );
        return newState;
      }
      return state;

    case actionTypes.removeAllFromWishlist:
      newState = [];
      return newState;

    default:
      return state;
  }
};

const fetchWishlist = async (link, body) => {
  await fetch(api.apiUrl + "/wishlist/" + link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => data.message);
};

export default Wishlist;
