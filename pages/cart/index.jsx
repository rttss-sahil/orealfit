import React from "react";
import { connect } from "react-redux";
import Product from "../../components/Major/Product";

export const Cart = ({ state }) => {
  return (
    <div className="cart-page">
      <h1>Cart / Bag</h1>
      <div className="cart-all">
        {state.cart.length <= 0 ? (
          <h2>No Products found. Please shop.</h2>
        ) : (
          state.cart.map((product, index) => (
            <Product product={product} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
