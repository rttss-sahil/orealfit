import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";

import api from "../../lib/api";

import { FaUserAlt, FaUnlock } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

import actions from "../../store/actions/actions";

export const Signup = ({ state, dispatch }) => {
  const [email, setEmail] = React.useState(""),
    // [phone, setPhone] = React.useState(""),
    [password, setPassword] = React.useState(""),
    submitLogin = async (e) => {
      e.preventDefault();
      const user = await fetch(api.apiUrl + "/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => res.json());
      console.log(user);
      if (user.message) {
        Promise.all([
          dispatch(actions.addUser(user)),
          dispatch(actions.addMessage(user.message)),
        ]);
        Router.push("/");
      } else if (user.error) {
        dispatch(actions.addMessage(user.error));
        console.log(state.message);
      }
    };
  return (
    <div className="signup-page">
      <h1>New here? Join the Community !</h1>
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
      <div className="instead">
        {"Alreay a member, "}
        <Link href="/login">Login</Link>
        {" instead."}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Signup);
