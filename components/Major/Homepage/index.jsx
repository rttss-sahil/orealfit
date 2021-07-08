import React from "react";

import Link from "next/link";
import { connect } from "react-redux";

export const HomePage = ({ state, dispatch }) => {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="container">
        {console.log("sjhd", state)}
        {!state.user.loggedIn && (
          <>
            <p>Become a member of Orealfit,</p>
            <Link href="/signup">Join Us</Link>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(HomePage);
