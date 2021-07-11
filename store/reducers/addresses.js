import actionTypes from "../actions/actionTypes";
import api from "../../lib/api";

const initialState = [];

const Addresses = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addDirectlyToAddresses:
      if (action.payload.length > 0) {
        state = action.payload;
      } else {
        return state;
      }
      return state;

    case actionTypes.addNewAddress:
      if (!state.some((item) => item.id === action.payload.id)) {
        newState = [...state, action.payload];
        fetchAddress("add", JSON.stringify(action.payload));
        return newState;
      }
      return state;

    case actionTypes.removeAddress:
      if (state.some((item) => item.id === action.payload.id)) {
        newState = [...state].filter((item) => item.id !== action.payload.id);
        fetchAddress("remove", JSON.stringify(action.payload));
        return newState;
      }
      return state;

    default:
      return state;
  }
};

const fetchAddress = async (link, body) => {
  await fetch(api.apiUrl + "/addresses/" + link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => data.message);
};

export default Addresses;
