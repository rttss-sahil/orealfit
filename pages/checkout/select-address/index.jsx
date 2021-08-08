import React from "react";
import { connect } from "react-redux";

import Link from "next/link";

import actions from "../../../store/actions/actions";
import Router from "next/router";
import Head from "next/head";

export const SelectAddress = ({ state, dispatch }) => {
  const [selAddress, setSelAddress] = React.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selAddress) {
      dispatch(actions.addAddressToCheckout(state.addresses[selAddress - 1]));
      Router.push("/checkout/payment");
    }
  };
  return (<>
  <Head>
    <title>Select Address For Checkout</title>
  </Head>
    <div>
      <h1>Select Address</h1>
      <div className="select-address-all">
        {state.addresses.length > 0 ? (
          <form
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => setSelAddress(e.target.value)}
            value={selAddress}
          >
            {" "}
            {state.addresses.map((address) => (
              <div className="input-group">
                <input
                  key={address.id}
                  type="radio"
                  name="address"
                  value={address.id}
                />
                <label>
                  <h2>{address.name}</h2>
                  <p>{address.street}</p>
                  <p>
                    {address.landmark}
                    {" , "}
                    {address.city}
                    {" , "}
                    {address.territory}
                  </p>
                  <h4>{address.mobile}</h4>
                </label>
              </div>
            ))}
            <Link href="/user/addresses/add">Add New Address</Link>
            <input
              className={!selAddress ? "disabled" : ""}
              type="submit"
              value="Payment Method"
            />
          </form>
        ) : (
          <Link href="/user/addresses/add">Add Address</Link>
        )}
      </div>
    </div>
  </>);
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(SelectAddress);
