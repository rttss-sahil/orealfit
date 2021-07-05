import React from "react";
import { connect } from "react-redux";

export const Wishlist = ({ state }) => {
  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div className="wishlist-all">
        {!state.wishlist.length >= 0 ? (
          <h2>No Products found. Please shop.</h2>
        ) : (
          state.wishlist.map((product, index) => (
            <>
              <div className="wishlist-item" key={index}>
                {product.name}
              </div>
              <br />
            </>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
