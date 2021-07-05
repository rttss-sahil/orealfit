import React from "react";
import { connect } from "react-redux";
import { getAllProductIds, getProductData } from "../../lib/product";

import "react-awesome-slider/dist/styles.css";
import actions from "../../store/actions/actions";
import { IndividualProduct } from "../../components/Major/individualProduct";

export const Product = ({ state, dispatch, product }) => {
  const [loading, setLoading] = React.useState(!product),
    setLoadingOff = () => {
      setLoading(false);
    },
    addToCart = (product) => {
      dispatch(actions.addProductToCart(product));
    },
    addToWishlist = (product) => {
      dispatch(actions.addProductToWishlist(product));
    },
    removeFromWishlist = (product) => {
      dispatch(actions.removeProductFromWishlist(product));
    };
  React.useEffect(() => {
    if (product.category) {
      setLoadingOff();
      // console.log(product.category);
    }
  }, [product]);
  return (
    <div className="product-page">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <IndividualProduct
          product={product}
          addToCart={addToCart}
          removeFromWishlist={removeFromWishlist}
          addToWishlist={addToWishlist}
        />
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
