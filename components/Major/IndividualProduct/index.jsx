import React from "react";
import { connect } from "react-redux";

import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";

import AwesomeSlider from "react-awesome-slider";

export const IndividualProduct = ({
  product,
  state,
  addToCart,
  removeFromWishlist,
  addToWishlist,
}) => {
  const [attributes, setAttributes] = React.useState([]);
  const [productPrice, setProductPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  React.useEffect(() => {
    const newAttributes = product.attributes &&[...product.attributes].map(item => ({name: item.name, option: item.options[0]}));
    if (newAttributes.length !== attributes.length) {
      setAttributes(newAttributes)
    }
    product.price && setProductPrice(product.price);
    if (product) {
      document.querySelector('#description').innerHTML = product.description
    }
  })
  return (
    <>
    <Head>
    {product.name && (
      <title>{product.name}</title>
    )}
    </Head>
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
              <select name={item.name} onChange={(e) => {
                let attrIndex = (attributes.findIndex(attribute => attribute.name === item.name));
                const newAttributes = attributes;
                newAttributes[attrIndex].option = e.target.value;
                setAttributes(newAttributes)
              }}>
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
        <p> ₹{productPrice * quantity}</p>
        <p>  [Market Price: ₹{product.regular_price || Number(product.price) + 400}]</p>
        <form>
          <select name="quantity" onChange={e => setQuantity(e.target.value)}>
            <option defaultValue>1</option>
            <option defaultValue>2</option>
            <option defaultValue>3</option>
            <option defaultValue>4</option>
            <option defaultValue>5</option>
          </select>
        </form>
      </div>
      </div>
      <div className="product-details">
        <h2>Short Description</h2>
      <div id="description">
      </div>
      </div>
      <div className="product-details">
        <h2>100% Authenticity Guaranteed</h2>   
        <p>We provide 100% safe, newly manufactured products for you. </p>       
        <Link  href="/authenticity-certificate">
          <a style={{color: 'blue'}} target="_blank">See Certificate</a>
        </Link>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);
