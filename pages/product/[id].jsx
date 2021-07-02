import React from "react";
import { connect } from "react-redux";

export const Product = (props) => {
  return <div>Product</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
