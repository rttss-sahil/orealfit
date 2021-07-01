import React from "react";
import { connect } from "react-redux";
import { getAllPostIds, getPostData } from "../../lib/categories";

export const Product = (props) => {
  return (
    <div className="product-page">
      <h1>Product Name</h1>
      {postData.id}
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
