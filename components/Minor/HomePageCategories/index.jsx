import React from "react";
import { connect } from "react-redux";
export const index = (props) => {
  return (
    <div className="categories homepage">
      <h1>Categories</h1>
      <div className="category__list">{}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
