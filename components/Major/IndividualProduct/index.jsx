import React from "react";
import { connect } from "react-redux";

import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";
import Link from "next/link";

import AwesomeSlider from "react-awesome-slider";

export const IndividualProduct = ({
  product,
  state,
  addToCart,
  removeFromWishlist,
  addToWishlist,
}) => {
  const [attributes, setAttributes] = React.useState({});
  React.useEffect(() => {
    product.attributes && setAttributes(product.attributes)
  })
  return (
    <>
      <div className="product-page-carousel">
        <AwesomeSlider animation="cubeAnimation">
          {product.images.map((image, index) => 
              <div key={index}>
                <Image height={300} width={300} src={image.src} />
              </div>
          )}
        </AwesomeSlider>
      </div>
      <div className="product-details">
      <div className="product-page-name">{product.name}</div>
      <div className="product-page-price">
        <p>  ₹{product.price}</p>
        <p>  ₹{product.regular_price || Number(product.price) + 400}</p>
        <p>{
        "[-" +
              (
                (((product.regular_price || Number(product.price) + 400) - Number(product.price)) /
                  (product.regular_price || Number(product.price) + 400)) *
                100
              ).toFixed(0) +
              "% off ]"}
        </p>
      </div>
      <div className="product-page-price">
          {product.price}
      </div>
      {product.attributes && 
        product.attributes.map((item, index) => (
          <div className="product-page-attribute" key={index}>
            <div className="attribute-name">{item.name}</div>
            {item.options &&
              item.options.map((option, optionIndex) => {
                return (
                <div className="option-item" key={optionIndex}>
                  {option}
                </div>
              )})}
          </div>
        ))}
      </div>
      <div className="product-page-bottom">
        {state.user.loggedIn ? (
          !state.wishlist.some((item) => item.id === product.place.id) ? (
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
          )
        ) : (
          <Link href="/login">
            <div className="add-to-wishlist">
              <>
                <BsHeart /> WISHLIST
              </>
            </div>
          </Link>
        )}
        {state.user.loggedIn ? (
          !state.cart.some((item) => item.id === product.place.id) ? (
            <div
              className="add-to-cart"
              onClick={() => addToCart({ ...product.place, qty: 1 })}
            >
              <IoBagAdd /> ADD TO BAG
            </div>
          ) : (
            <Link href="/cart">
              <div className="add-to-cart">
                <IoBagCheck /> GO TO BAG
              </div>
            </Link>
          )
        ) : (
          <Link href="/login">
            <div className="add-to-cart">
              <>
                <IoBagAdd /> ADD TO BAG
              </>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);
