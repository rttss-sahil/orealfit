import React from "react";
import { connect } from "react-redux";
import { getAllPostIds, getPostData } from "../../lib/categories";
import Link from "next/link";

export const Product = (props) => {
  const [loading, setLoading] = React.useState(props.products);
  console.log(props.products);
  const setLoadingOff = () => {
    setLoading(false);
  };
  React.useEffect(() => {
    if (props.products.category) {
      setLoadingOff();
      console.log(props.products.category);
    }
  }, [props.products]);
  return (
    <div className="products-page">
      <ul className="products-all">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          props.products.category.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="products-page-item"
            >
              {product.name}
            </Link>
          ))
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
