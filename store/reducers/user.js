import actionTypes from "../actions/actionTypes";
import api from "../../lib/api";

const initialState = {
  name: "Guest",
};

const User = async (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.loginUser:
      newState = await fetch(api.apiUrl + "/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });
      return newState;

    case actionTypes.signupUser:
      newState = await fetch(api.apiUrl + "/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });

      return newState;

    case actionTypes.removeUser:
      newState = {};
      return newState;

    default:
      return state;
  }
};

export default User;
