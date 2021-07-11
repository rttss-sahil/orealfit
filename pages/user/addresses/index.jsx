import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

export const Addresses = ({ state, dispatch }) => {
  return (
    <div className="addresses-page">
      <h1>My Addresses</h1>
      <div className="addresses-all">
        {state.addresses.length > 0 ? (
          state.addresses.map((address) => (
            <div className="address-item" key={address.id}>
              {address.pincode}
            </div>
          ))
        ) : (
          <>
            <h2>No addresses found.</h2>
            <Link href="/user/addresses/add">Add One</Link>
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

export default connect(mapStateToProps)(Addresses);
