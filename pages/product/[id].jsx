import React from "react";
import { connect } from "react-redux";
import { getAllProductIds, getProductData } from "../../lib/product";

export const Product = (props) => {
  const [loading, setLoading] = React.useState(!props.products);
  const setLoadingOff = () => {
    setLoading(false);
  };
  const addToCart = (product) => {
    props.dispatch(actions.addProductToCart(product));
  };
  React.useEffect(() => {
    if (props.products.category) {
      setLoadingOff();
      console.log(props.products.category);
    }
  }, [props.products]);
  return (
    <div className="product-page">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="product-page-carousel"></div>
          <div className="product-page-name">{props.products.place.name}</div>
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
  const products = await getProductData(params.id);
  return {
    props: {
      products,
    },
  };
}

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Product);
