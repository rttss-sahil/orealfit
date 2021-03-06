import React from "react";
import { connect } from "react-redux";

import Head from 'next/head';

import Product from "../../components/Major/Product";
import {
  getAllCategoryIds,
  getProductData,
} from "../../lib/productListfromCategory";
import actions from "../../store/actions/actions";

export const ProductListFromCatgory = ({ products, state, dispatch }) => {
  const [loading, setLoading] = React.useState(!products),
    setLoadingOff = () => {
      setLoading(false);
    },
    removeFromWishlist = (product) => {
      dispatch(
        actions.removeProductFromWishlist({
          product,
          email: state.user.user.email,
        })
      );
    },
    addToWishlist = (product) => {
      dispatch(
        actions.addProductToWishlist({ product, email: state.user.user.email })
      );
    };
  React.useEffect(() => {
    if (products.category) {
      setLoadingOff();
    }
  }, [products]);
  return (<>
  <Head>
    {/* <title>{}</title> */}
  </Head>
    <div className="products-page">
      {!loading && <h1>{products.category.length} Products Found</h1>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="products-all">
          {products.category.map((product, index) => (
            <Product
              key={index}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              product={product}
            />
          ))}
        </ul>
      )}
    </div>
  </>);
};

export async function getStaticPaths() {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getProductData(params.slug);
  return {
    props: {
      products,
    },
  };
}
const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(ProductListFromCatgory);
