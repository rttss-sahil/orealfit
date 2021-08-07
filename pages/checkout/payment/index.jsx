import React, { useState } from "react";
import { connect } from "react-redux";

import Router from "next/router";

import actions from "../../../store/actions/actions";
import Head from "next/head";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Payment({ state, dispatch }) {
  const [name, setName] = useState("Consumer");
  const live = false;

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: test ? "rzp_live_DCQ9l9wScAEEmf" : "rzp_test_94ycVPW2nP8vei",
      currency: "INR",
      amount: (state.checkout.payment * 100).toString(),
      // order_id: state.orders.length + 1,
      name: "Pay Orealfit",
      handler: function (response) {
        Promise.all([
          dispatch(
            actions.addNewShipment({
              ...state.checkout,
              paymentType: "prepaid",
              email: state.user.user.email,
            })
          ),
          dispatch(
            actions.addMessage(
              "Order successfully placed. Thank you for shopping with us."
            )
          ),
        ]);
        Router.push("/");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
    <Head>
      <title>Payment Page</title>
    </Head>
    <div className="payment-page">
    {console.log(state.checkout)}
      <h1>Payment</h1>
      <div className="payment-all">
        <div onClick={displayRazorpay} className="payment-item">
          Online Payment ( Faster Delivery, recommended )
        </div>
        <div
          onClick={() => {
            Promise.all([
              dispatch(
                actions.addNewShipment({
                  ...state.checkout,
                  paymentType: "cod",
                  email: state.user.user.email,
                })
              ),
              dispatch(
                actions.addMessage(
                  "Order successfully placed. Thank you for shopping with us."
                )
              ),
            ]);
            Router.push("/");
          }}
          className="payment-item"
        >
          Cash On Delivery ( Slower Delivery )
        </div>
      </div>
    </div>
  </>);
}

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(Payment);
