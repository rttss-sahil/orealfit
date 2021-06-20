import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import logo from "../../../public/img/logo.jpg";

export const Header = ({ state, homepage }) => {
  return (
    <div className="header">
      <Image src={logo} alt="Orealfit Logo" width="100" height="75" />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
