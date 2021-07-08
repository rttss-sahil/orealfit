import React from "react";
import { connect } from "react-redux";

import actions from "../../store/actions/actions";

import Link from "next/link";

export const More = ({ state, dispatch }) => {
  return (
    <div className="more-page">
      <h1>Me and Orealfit</h1>
      <div className="more-page-options">
        {console.log("usr: ", state.user)}
        <div className="option-item">
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="option-item account">
          {!state.user.loggedIn ? (
            <Link href="/login">SignIn / SignUp</Link>
          ) : (
            <div
              onClick={() => {
                Promise.all[
                  (dispatch(actions.removeUser()),
                  dispatch(actions.addMessage("Successfully Logged Out.")))
                ];
              }}
            >
              Logout
            </div>
          )}
        </div>
        {/* <div className="option-item"></div> */}
        {/* <div className="option-item"></div> */}
        {/* <div className="option-item"></div> */}
        {/* <div className="option-item"></div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(More);
