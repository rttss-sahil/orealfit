import React from "react";
import { connect } from "react-redux";

import Link from "next/link";

import Product from "../../components/Major/Product";

export const Cart = ({ state }) => {
  return (
    <div className="cart-page">
      <h1>Cart / Bag</h1>
      <div className="cart-all">
        {state.user.loggedIn ? (
          state.cart.length <= 0 ? (
            <h2>0 Products in Cart. Continue shopping.</h2>
          ) : (
            state.cart.map((product, index) => (
              <Product product={product} key={index} />
            ))
          )
        ) : (
          <div className="loggedout">
            <h2>
              You aren't logged in to the website, please Login / Register.
            </h2>
            <Link href="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
