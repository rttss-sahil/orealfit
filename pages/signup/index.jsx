import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";

import api from "../../lib/api";

import { FaUserAlt, FaUnlock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsExclamation } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

import actions from "../../store/actions/actions";

export const Signup = ({ state, dispatch }) => {
  const [email, setEmail] = React.useState(""),
    [name, setName] = React.useState(""),
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
      <h1>New here? Join the Community !</h1>
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
            type="text"
            required
            placeholder="John Doe"
            autoComplete="name"
            value={name}
            maxLength={20}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FiMail />
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
        {/* <div className="forgot-password">
          <Link href="/forgot-password">Forgot Password ?</Link>
        </div> */}
      </form>
      <div className="agreement">
        <GiCheckMark />
        <p>I agree to the</p>
        <div className="link">
          <Link href="/terms-of-use">Terms of use</Link>
        </div>
        <p>and</p>
        <div className="link">
          <Link href="privacy-policy">Privacy Policy</Link>
        </div>
        <p>.</p>
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
