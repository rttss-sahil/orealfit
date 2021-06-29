import React from "react";
import { connect } from "react-redux";

export const Category = (props) => {
  return (
    <div>
      <div>Category</div>
      <div>sdfhjfdjsk</div>
      <div>sdfhjfdjsk</div>
      <div>sdfhjfdjsk</div>
      <div>sdfhjfdjsk</div>
      <div>sdfhjfdjsk</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
