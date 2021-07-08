import actionTypes from "../actions/actionTypes";

const initialState = {
  string: "",
};

const Message = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addMessage:
      newState = { type: "message", string: action.payload };
      return newState;

    case actionTypes.removeMessage:
      newState = { string: "" };
      return newState;

    case actionTypes.addError:
      newState = { type: "error", string: action.payload };
      return newState;

    case actionTypes.removeError:
      newState = { string: "" };
      return newState;

    default:
      return state;
  }
};

export default Message;
