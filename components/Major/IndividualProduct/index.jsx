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
  const [attributes, setAttributes] = React.useState([]);
  const [productPrice, seTProductPrice] = React.useState(0);
  React.useEffect(() => {
    product.attributes && setAttributes(product.attributes)
    product.price && seTProductPrice(product.price);
  })
  return (
    <div className="product-page">
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
      <div className="product-page-attribute">
      {product.attributes && 
        product.attributes.map((item, index) => (
          <form className="attribute" key={index} >
            <div className="attribute-name">{item.name}</div>
            {item.options && (
              <select >
              {console.log(attributes.find(a => a.name === "Weight"))}
              {item.options.map((option, optionIndex) => (
                <option className="option-item" value={option.name} key={optionIndex}>
                  {option}
                </option>
            ))}
              </select>
            )
              }
          </form>
        ))}
      </div>
        <div className="product-page-discount">{
        "[Save " +
              (
                (((product.regular_price || Number(product.price) + 400) - Number(product.price)) /
                  (product.regular_price || Number(product.price) + 400)) *
                100
              ).toFixed(0) +
              "% off ]"}
        </div>
      <div className="product-page-price">
        <p>  ₹{productPrice}</p>
        <p>  [₹{product.regular_price || Number(product.price) + 400}]</p>
      </div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);
