import React from "react";
import { connect } from "react-redux";

import Link from "next/link";

import actions from "../../store/actions/actions";
import CartProduct from "../../components/Major/CartProduct";

export const Cart = ({ state, dispatch }) => {
  // const [allCount, setAllCount] = React.useState(state.cart.items);
  const removeFromCart = (product) => {
    dispatch(
      actions.removeProductFromCart({ product, email: state.user.user.email })
    );
  };
  const price =
    state.cart && state.cart.length === 1
      ? state.cart[0].price
      : state.cart.reduce(
          (item, now) => Number(item.price) + Number(now.price)
        );
  const regularPrice =
    state.cart && state.cart.length === 1
      ? state.cart[0].regular_price || Number(state.cart[0].price) + 200
      : state.cart.reduce(
          (item, now) =>
            (Number(item.regular_price) || Number(item.price) + 200) +
            (Number(now.regular_price) || Number(now.price) + 200)
        );
  return (
    <div className="cart-page">
      <h1>Cart / Bag</h1>
      <div className="cart-all">
        {state.user.loggedIn ? (
          state.cart.length <= 0 ? (
            <h2>0 Products in Cart. Continue shopping.</h2>
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
                Price (
                {state.cart.length +
                  (state.cart.length == 1 ? " item" : " items")}
                )
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
      <div className="place-order">
        <button>Place Order</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Cart);
