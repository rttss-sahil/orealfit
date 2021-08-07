import React from "react";
import { connect } from "react-redux";

import Link from "next/link";
import Router from "next/router";

import actions from "../../store/actions/actions";
import CartProduct from "../../components/Major/CartProduct";

export const Cart = ({ state, dispatch }) => {
  const removeFromCart = (product) => {
    dispatch(
      actions.removeProductFromCart({ product, email: state.user.user.email })
    );
  };
  const price =
    state.cart.length > 0 &&
    (state.cart.length === 1
      ? state.cart[0].price * (state.cart[0].quantity || 1)
      : state.cart.reduce((total, item) => total + Number(item.price * (item.quantity || 1)), 0));
  const regularPrice =
    state.cart.length > 0 &&
    (state.cart.length === 1
      ? (state.cart[0].regular_price) * (state.cart[0].quantity) || (Number(state.cart[0].price) + 200) * (state.cart[0].quantity)
      : state.cart.reduce(
          (total, item) =>
            total + Number(item.regular_price || Number(item.price) + 200),
          0
        ));
  return (
    <div className="cart-page">
      <h1>Cart / Bag</h1>
      <div className="cart-all">
        {state.user.loggedIn ? (
          state.cart.length <= 0 ? (
            <>
            <h2>No Products were Found. Add them now!</h2>
            <div className="cart-shop-more">
        Join millions of Orealfit memebers
        <Link href="/category">Continue Shopping</Link>
      </div>
            </>
          ) : (
            state.cart.map((product) => (
              <CartProduct product={product} removeFromCart={removeFromCart} />
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
        {state.cart.length > 0 && (
          <div className="price-detail">
            <h2>Price Details</h2>
            <div className="price">
              <p>
                Price 
                
              </p>
              <p>
                ₹{" "}
                {state.cart.length === 1
                  ? state.cart[0].regular_price ||
                    Number(state.cart[0].price) + 200
                  : regularPrice}
              </p>
            </div>
            <div className="discount">
              <p>Discount</p>
              <p>₹ {regularPrice - price}</p>
            </div>
            <div className="delivery">
              <p>Delivery Charges</p>
              <p>FREE</p>
            </div>
            <div className="total">
              <p>Total Amount</p>
              <p>₹ {price}</p>
            </div>
          </div>
        )}
      </div>
      {state.user.loggedIn && state.cart.length > 0 && (
        <div className="place-order">
          <button
            onClick={() => {
              Promise.all([
                dispatch(actions.addProductToCheckout(state.cart)),
                dispatch(actions.addPaymentToCheckout(price)),
              ]);
              Router.push("/checkout/select-address");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Cart);
