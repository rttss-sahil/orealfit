import React from "react";
import { connect } from "react-redux";
import { getAllProductIds, getProductData } from "../../lib/product";

import "react-awesome-slider/dist/styles.css";
import actions from "../../store/actions/actions";
import IndividualProduct from "../../components/Major/IndividualProduct";

export const Product = ({ state, dispatch, product }) => {
  const [loading, setLoading] = React.useState(!product),
    setLoadingOff = () => {
      setLoading(false);
    },
    addToCart = (product) => {
      dispatch(
        actions.addProductToCart({ product, email: state.user.user.email })
      );
    },
    addToWishlist = (product) => {
      dispatch(
        actions.addProductToWishlist({ product, email: state.user.user.email })
      );
    },
    removeFromWishlist = (product) => {
      dispatch(
        actions.removeProductFromWishlist({
          product,
          email: state.user.user.email,
        })
      );
    };
  React.useEffect(() => {
    if (product.category) {
      setLoadingOff();
    }
  }, [product]);
  return (
    <div className="product-page">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <IndividualProduct
          product={product.place}
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
