import React from "react";
import { connect } from "react-redux";
import { getAllPostIds, getPostData } from "../../lib/categories";
import Link from "next/link";

export const Product = (props) => {
  console.log(props.products.category);
  return (
    <div className="products-page">
      <ul className="products-all">
        {props.products ? (
          props.products.category.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="products-page-item"
            >
              {product.name}
            </Link>
          ))
        ) : (
          <li>No product found</li>
        )}
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getPostData(params.id);
  return {
    props: {
      products,
    },
  };
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
