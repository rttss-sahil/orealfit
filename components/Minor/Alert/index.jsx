import React from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions/actions";

export const Alert = ({ state, dispatch }) => {
  const removeMessage = () => {
    dispatch(actions.removeMessage());
  };
  return (
    <div className={state.message.string && "alert-page"}>
      {state.message.string && (
        <div className={`alert ${state.message.type}`}>
          <p>{state.message.string}</p>
          <button onClick={() => removeMessage()}>OK</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(Alert);
