import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { FaUserAlt, FaUnlock } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

import actions from "../../store/actions/actions";

export const Signup = ({ state, dispatch }) => {
  const [email, setEmail] = React.useState(""),
    // [phone, setPhone] = React.useState(""),
    [password, setPassword] = React.useState(""),
    submitLogin = (e) => {
      e.preventDefault();
      dispatch(
        actions.signupUser({
          email,
          password,
        })
      );
    };
  return (
    <div className="signup-page">
      <h1>New here ? , Join the Community !</h1>
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
            minLength={8}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="agreement">
        <GiCheckMark />
        {" I agree to the "}
        <Link href="/terms-of-use">Terms of use</Link>
        {" and "}
        <Link href="privacy-policy">Privacy Policy</Link>
        {" . "}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Signup);
