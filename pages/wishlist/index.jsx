import React from "react";
import { connect } from "react-redux";

export const Wishlist = (props) => {
  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div classname="wishlist-all"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
