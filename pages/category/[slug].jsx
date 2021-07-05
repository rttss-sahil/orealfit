import React from "react";
import { connect } from "react-redux";
import {
  getAllCategoryIds,
  getProductData,
} from "../../lib/productListfromCategory";
import Link from "next/link";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import actions from "../../store/actions/actions";

export const ProductListFromCatgory = (props) => {
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
    <div className="products-page">
      {!loading && <h1>{props.products.category.length} Products Found</h1>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="products-all">
          {props.products.category.map((product) => (
            <div className="products-page-item" key={product.id}>
              <div className="products-page-item-top">
                <div className="products-page-item-discount">
                  {product.regular_price
                    ? (
                        ((product.regular_price - product.price) /
                          product.regular_price) *
                        100
                      ).toFixed(0) + "%"
                    : ""}
                </div>
                <div
                  className="products-page-item-wishlist"
                  onClick={() => addToCart(product)}
                >
                  <MdAddShoppingCart />
                </div>
              </div>
              {/* {console.log(product.images)} */}
              <Link href={`/product/${product.id}`}>
                {product.images[0] ? (
                  <Image
                    src={`${product.images[0].src}`}
                    className="products-page-item-image"
                    height={200}
                    width={200}
                  />
                ) : (
                  <div></div>
                )}
              </Link>
              <Link href={`/product/${product.id}`}>
                <div className="products-page-item-name">
                  {product.name.slice(0, 40)}...
                </div>
              </Link>
              <Link href={`/product/${product.id}`}>
                <div className="products-page-item-bottom">
                  <div className="products-page-item-price">
                    ₹{product.price}
                  </div>
                  <div className="products-page-item-rating">
                    <BsStarFill fill="orange" />
                    <p>
                      {Number(product.average_rating) === 0
                        ? "No ratings yet"
                        : product.average_rating}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
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
