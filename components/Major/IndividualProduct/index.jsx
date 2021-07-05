import React from "react";
import { connect } from "react-redux";

import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";
import Link from "next/link";

import AwesomeSlider from "react-awesome-slider";

export const IndividualProduct = ({ product, state, key }) => {
  return (
    <>
      {console.log(state)}
      <div className="product-page-carousel">
        <AwesomeSlider animation="cubeAnimation">
          {product.place.images.map((image, index) => {
            return (
              <div key={index}>
                <Image height={300} width={300} src={image.src} />
              </div>
            );
          })}
        </AwesomeSlider>
      </div>
      <div className="product-page-name">{product.place.name}</div>
      {product.attributes &&
        product.attributes.map((item, index) => (
          <div className="product-page-attribute" key={index}>
            <div className="attribute-name">{item.name}</div>
            {item.options &&
              item.options.map((option, optionIndex) => (
                <div className="option-item" key={optionIndex}>
                  {option}
                </div>
              ))}
          </div>
        ))}
      <div className="product-page-bottom">
        {!state.wishlist.some((item) => item.id === product.place.id) ? (
          <div
            className="add-to-wishlist"
            onClick={() => addToWishlist(product.place)}
          >
            <BsHeart /> WISHLIST
          </div>
        ) : (
          <div
            className="add-to-wishlist"
            onClick={() => removeFromWishlist(product.place)}
          >
            <BsHeartFill /> WISHLISTED
          </div>
        )}
        {!state.cart.some((item) => item.id === product.place.id) ? (
          <div className="add-to-cart" onClick={() => addToCart(product.place)}>
            <IoBagAdd /> TO BAG
          </div>
        ) : (
          <Link href="/cart">
            <div className="add-to-cart">
              <IoBagCheck /> GO TO BAG
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);