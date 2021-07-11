import React from "react";
import { connect } from "react-redux";

import AddAddresses from "../../../../components/Minor/AddAddresses";

export const AddressesAdd = () => {
  return (
    <div className="add-address-page">
      <h1>Add New Address</h1>
      <AddAddresses />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddressesAdd);
