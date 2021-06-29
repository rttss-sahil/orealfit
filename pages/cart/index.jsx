import React from "react";
import { connect } from "react-redux";

export const Cart = (props) => {
  return (
    <div>
      <h1>Cart Age</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
