import React from "react";
import { connect } from "react-redux";
import { getAllPostIds, getPostData } from "../../lib/categories";

export const Product = (props) => {
  console.log(props.products);
  return (
    <div className="products-page">
      <ul>
        {/* {props.products.map((product) => (
          <Link key={product.id} classname="products-page-item">
            {product.name}
          </Link>
        ))} */}
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
  const products = getPostData(params.id);
  return {
    props: {
      products,
    },
  };
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
