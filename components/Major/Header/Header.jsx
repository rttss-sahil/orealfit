import React from "react";
import { connect } from "react-redux";
import "./Header.module.css";

export const Header = ({ state, homepage }) => {
  return <div className="header">shkdjg</div>;
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
