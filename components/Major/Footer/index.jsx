import React from "react";
import { connect } from "react-redux";

export const Footer = (props) => {
  return <div className="footer">Footer</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
