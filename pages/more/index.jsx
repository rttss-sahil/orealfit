import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

export const More = ({ state, dispatch }) => {
  return (
    <div className="more-page">
      <h1>Me and Orealfit</h1>
      <div className="more-page-options">
        {!state.user.loggedIn && (
          <div className="option-item">
            <Link href="/login">Login</Link>
            <Link href="/signup">Register</Link>
          </div>
        )}
        {/* <div className="option-item"></div> */}
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
