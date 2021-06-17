import React from "react";
import { connect } from "react-redux";

export const Header = (props) => {
  return <div>Header</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
