import React from "react";
import { connect } from "react-redux";

export const More = ({ state, dispatch }) => {
  return (
    <div className="more-page">
      <h1>Me and Orealfit</h1>
      {/* <div className=""></div> */}
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(More);
