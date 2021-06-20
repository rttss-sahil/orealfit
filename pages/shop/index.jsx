import React from "react";
import { connect, Provider } from "react-redux";
import store from "../../store";

export const Shop = (props) => {
  return <div>SHop Page</div>;
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
