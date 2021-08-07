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
        <div className="products-blank">
           {' '}
        </div>
        {state.user.loggedIn ? (
          state.wishlist &&
          !state.wishlist.some((item) => item.id === product.id) ? (
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
          )
        ) : (
          <Link href="/login">
            <div className="products-page-item-wishlist">
              <BsHeart />
            </div>
          </Link>
        )}
      </div>
      <Link href={`/product/${product.id}`}>
      <a target="_blank">
      <div className="products-page-item-image">
        {product.images[0] ? (
          <Image
            src={`${product.images[0].src}`}
            height={200}
            width={200}
          />
        ) : (
          <div></div>
        )}
      </div>
      </a>
      </Link>
      <Link href={`/product/${product.id}`}>
        <div className="products-page-item-name">
          {product.name}
        </div>
      </Link>
      <Link href={`/product/${product.id}`}>
        <div className="products-page-item-bottom">
          <div className="products-page-item-price">
          <p>
          ₹{product.price}
          </p>
          <p>
          (₹{product.regular_price || Number(product.price) + 200})
          </p>
          </div>
          <div className="products-page-item-discount">
          {product.regular_price 
            ? "[-" +
              (
                ((product.regular_price - product.price) /
                  product.regular_price) *
                100
              ).toFixed(0) +
              "% off ]"
            : 
            "[-" +
              (
                (400 /
                  (Number(product.price) + 200)) *
                100
              ).toFixed(0) +
              "% off ]"}
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
