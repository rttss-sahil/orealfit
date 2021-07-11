import React from "react";
import { connect } from "react-redux";

export const Orders = (props) => {
  return (
    <div className="orders-page">
      <h1>My Orders</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
