import React from "react";
import { connect } from "react-redux";

export const More = (props) => {
  return (
    <div className="more-page">
      <h1>Me and Orealfit</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(More);
