import React from "react";
import { connect } from "react-redux";
import { FaUserAlt, FaUnlock } from "react-icons/fa";
import { BsExclamation } from "react-icons/bs";
import Link from "next/link";
import Router from "next/router";

import api from "../../lib/api";

import actions from "../../store/actions/actions";

export const Login = ({ state, dispatch }) => {
  const [email, setEmail] = React.useState(""),
    // [phone, setPhone] = React.useState(""),
    [password, setPassword] = React.useState(""),
    submitLogin = async (e) => {
      e.preventDefault();
      const user = await fetch(api.apiUrl + "/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => res.json());
      if (user.message) {
        Promise.all([
          dispatch(actions.addUser(user)),
          dispatch(actions.addMessage(user.message)),
        ]);
        Router.push("/");
      } else if (user.error) {
        dispatch(actions.addMessage(user.error));
      }
    };
  return (
    <div className="user-page">
      <h1>Welcome back, Enter here</h1>
      <form onSubmit={(e) => submitLogin(e)}>
        <div className="input-group alert">
          <BsExclamation />
          <p>
            Please remember your password, as we're having trouble resetting
            them.
          </p>
        </div>
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="forgot-password">
          <Link href="/forgot-password">Forgot Password ?</Link>
        </div> */}
        <button type="submit">Login</button>
      </form>
      <div className="instead">
        {"New member? "}
        <Link href="/signup">Register</Link>
        {" instead."}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Login);
