import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

import actions from "../../store/actions/actions";

import Product from "../../components/Major/Product";

export const Wishlist = ({ state, dispatch }) => {
  const removeFromWishlist = (product) => {
    dispatch(
      actions.removeProductFromWishlist({
        product,
        email: state.user.user.email,
      })
    );
  };
  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      <div className="wishlist-all">
        {state.user.loggedIn ? (
          state.wishlist.length <= 0 ? (
            <h2>0 Products in Wishlist. Add Products to Wishlist.</h2>
          ) : (
            state.wishlist.map((product, index) => (
              <Product
                product={product}
                key={index}
                removeFromWishlist={removeFromWishlist}
              />
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

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Wishlist);
