import React from "react";
import { connect } from "react-redux";

export const More = (props) => {
  return (
    <div>
      <ul>
        <li>Settings</li>
        <li>Settings</li>
        <li>Settings</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(More);
