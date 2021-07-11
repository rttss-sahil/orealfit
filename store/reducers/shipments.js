import actionTypes from "../actions/actionTypes";
import api from "../../lib/api";

const initialState = [];

const Shipments = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addNewShipment:
      newState = [...state, action.payload];
      fetchShipment("open", JSON.stringify(action.payload));
      return newState;

    default:
      return state;
  }
};

const fetchShipment = async (link, body) => {
  await fetch(api.apiUrl + "/shipment/" + link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => data.message);
};

export default Shipments;
