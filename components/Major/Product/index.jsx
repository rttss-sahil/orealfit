import React from "react";
import { connect } from "react-redux";

import Link from "next/link";
import Image from "next/image";
import { BsHeart, BsHeartFill, BsStarFill } from "react-icons/bs";

export const Product = ({
  product,
  state,
  addToWishlist,
  removeFromWishlist,
}) => {
  return (
    <div className="products-page-item" key={product.id}>
      <div className="products-page-item-top">
        <div className="products-page-item-discount">
          {product.regular_price
            ? "-" +
              (
                ((product.regular_price - product.price) /
                  product.regular_price) *
                100
              ).toFixed(0) +
              "%"
            : ""}
        </div>
        {console.log(state.wishlist)}
        {!state.wishlist.some((item) => item.id === product.id) ? (
          <div
            className="products-page-item-wishlist"
            onClick={() => addToWishlist(product)}
          >
            <BsHeart />
          </div>
        ) : (
          <div
            className="products-page-item-wishlist"
            onClick={() => removeFromWishlist(product)}
          >
            <BsHeartFill />
          </div>
        )}
      </div>
      <Link href={`/product/${product.id}`}>
        {product.images[0] ? (
          <Image
            src={`${product.images[0].src}`}
            className="products-page-item-image"
            height={200}
            width={200}
          />
        ) : (
          <div></div>
        )}
      </Link>
      <Link href={`/product/${product.id}`}>
        <div className="products-page-item-name">
          {product.name.slice(0, 40)}...
        </div>
      </Link>
      <Link href={`/product/${product.id}`}>
        <div className="products-page-item-bottom">
          <div className="products-page-item-price">₹{product.price}</div>
          <div className="products-page-item-rating">
            <BsStarFill fill="orange" />
            <p>
              {Number(product.average_rating) === 0
                ? "No ratings yet"
                : product.average_rating}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
