import React from "react";
import { connect } from "react-redux";
import { getAllProductIds, getProductData } from "../../lib/product";
import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";
import Link from "next/link";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import actions from "../../store/actions/actions";

export const Product = (props) => {
  const [loading, setLoading] = React.useState(!props.product),
    setLoadingOff = () => {
      setLoading(false);
    },
    addToCart = (product) => {
      props.dispatch(actions.addProductToCart(product));
    },
    addToWishlist = (product) => {
      props.dispatch(actions.addProductToWishlist(product));
    },
    removeFromWishlist = (product) => {
      props.dispatch(actions.removeProductFromWishlist(product));
    };
  React.useEffect(() => {
    if (props.product.category) {
      setLoadingOff();
      console.log(props.product.category);
    }
  }, [props.product]);
  return (
    <div className="product-page">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="product-page-carousel">
            <AwesomeSlider animation="cubeAnimation">
              {props.product.place.images.map((image, index) => {
                return (
                  <div key={index}>
                    <Image height={300} width={300} src={image.src} />
                  </div>
                );
              })}
            </AwesomeSlider>
          </div>
          <div className="product-page-name">{props.product.place.name}</div>
          {props.product.attributes &&
            props.product.attributes.map((item, index) => (
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
            {!props.state.wishlist.some(
              (item) => item.id === props.product.place.id
            ) ? (
              <div
                className="add-to-wishlist"
                onClick={() => addToWishlist(props.product.place)}
              >
                <BsHeart /> WISHLIST
              </div>
            ) : (
              <div
                className="add-to-wishlist"
                onClick={() => removeFromWishlist(props.product.place)}
              >
                <BsHeartFill /> WISHLISTED
              </div>
            )}
            {!props.state.cart.some(
              (item) => item.id === props.product.place.id
            ) ? (
              <div
                className="add-to-cart"
                onClick={() => addToCart(props.product.place)}
              >
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
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductData(params.id);
  return {
    props: {
      product,
    },
  };
}

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Product);
