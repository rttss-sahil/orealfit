import actionTypes from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  user: {},
};

// const initialState = {
//   loggedIn: true,
//   user: {
//     email: "abc@def.com",
//     name: "undefined",
//   },
// };

const User = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addUser:
      newState = { ...action.payload, loggedIn: true };
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", newState.user.name);
      localStorage.setItem("email", newState.user.email);
      return newState;

    case actionTypes.removeUser:
      newState = {
        loggedIn: false,
        user: {},
      };
      localStorage.removeItem("user");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.setItem("loggedIn", false);
      return newState;

    default:
      return state;
  }
};

export default User;
