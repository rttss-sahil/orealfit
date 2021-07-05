import React from "react";
import { connect } from "react-redux";
import { FaUserAlt, FaUnlock } from "react-icons/fa";

import actions from "../../store/actions/actions";

export const Login = ({ state, dispatch }) => {
  const [email, setEmail] = React.useState(""),
    // [phone, setPhone] = React.useState(""),
    [password, setPassword] = React.useState(""),
    submitLogin = (e) => {
      e.preventDefault();
      dispatch(
        actions.loginUser({
          email,
          password,
        })
      );
    };
  return (
    <div className="login-page">
      <h1>Welcome back, Enter here</h1>
      <form onSubmit={(e) => submitLogin(e)}>
        <div className="input-group">
          <FaUserAlt />
          <input
            type="email"
            required
            placeholder="hello@user.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FaUnlock />
          <input
            type="password"
            placeholder="pasSw0rD@786"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Login);
