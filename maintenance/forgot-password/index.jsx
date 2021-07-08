import React from "react";
import { connect } from "react-redux";

import actions from "../../store/actions/actions";
import { HiOutlineMail } from "react-icons/hi";

function ForgotPassword({ state, dispatch }) {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actions.addMessage("Please check your email to reset the password.")
    );
  };
  return (
    <div className="forgot-password-page">
      <h1>Forgot Password ?</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <HiOutlineMail />
          <input
            type="email"
            required
            placeholder="hello@user.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Link</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(ForgotPassword);
