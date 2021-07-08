import actionTypes from "../actions/actionTypes";

const initialState = "";

const Error = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addError:
      newState = action.payload;
      return newState;

    case actionTypes.removeError:
      newState = "";
      return newState;

    default:
      return state;
  }
};

export default Error;
