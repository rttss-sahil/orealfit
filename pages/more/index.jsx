import React from "react";
import { connect } from "react-redux";

import actions from "../../store/actions/actions";

import Link from "next/link";

export const More = ({ state, dispatch }) => {
  return (
    <div className="more-page">
      <h1>Me and Orealfit</h1>
      <div className="more-page-options">
        <div className="option-item">
          <Link href="/about-us">About Orealfit</Link>
        </div>
        {state.user.loggedIn && (
          <div className="option-item">
            <Link href="/user/addresses">My Addresses</Link>
          </div>
        )}
        {/* <div className="option-item"></div> */}
        {/* <div className="option-item"></div> */}
        {/* <div className="option-item"></div> */}
        {!state.user.loggedIn ? (
          <div className="option-item account">
            <Link href="/login">SignIn / SignUp</Link>
          </div>
        ) : (
          <div
            onClick={() => {
              Promise.all[
                (dispatch(actions.removeUser()),
                dispatch(actions.addMessage("Successfully Logged Out.")),
                dispatch(actions.removeAllFromCart()),
                dispatch(actions.removeAllFromWishlist()))
              ];
            }}
          >
            Logout
          </div>
        )}
        <div className="option-item">
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="option-item">
          <Link href="/return-replacement-policy">
            Returns / Replacement Policy
          </Link>
        </div>
        <div className="option-item">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(More);
