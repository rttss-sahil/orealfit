import React from "react";
import { connect } from "react-redux";

import Router from "next/router";
import actions from "../../../store/actions/actions";

export const index = ({ state, dispatch, link }) => {
  const [name, setName] = React.useState(""),
    [street, setStreet] = React.useState(""),
    [landmark, setLandmark] = React.useState(""),
    [pincode, setPincode] = React.useState(""),
    [mobile, setMobile] = React.useState(""),
    [cityOptions, setCityOptions] = React.useState([]),
    [city, setCity] = React.useState([]),
    [territory, setTerritory] = React.useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      dispatch(actions.addMessage("Mobile characters should be of length 10"));
    } else {
      const id = state.addresses.length + 1;
      dispatch(
        actions.addNewAddress({
          id,
          name,
          street,
          landmark,
          pincode,
          mobile,
          city,
          territory,
          email: state.user.user.email,
        })
      );
      Router.push(link || "/user/addresses");
    }
  };
  const pincodeHandler = async (e) => {
    setPincode(e.target.value);
    if (e.target.value.length === 6) {
      const cityOptions = await fetch(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!(data[0].Status === "Error")) {
            setCityOptions(data[0].PostOffice);
            setTerritory(data[0].PostOffice[0].State);
          } else {
            dispatch(
              actions.addError(
                data[0].Message + ". Please change your pincode."
              )
            );
          }
        });
    }
  };
  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Aryan Kumar"
          maxLength={20}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Mobile</label>
        <input
          type="mobile"
          placeholder="90000 90000"
          maxLength={10}
          minLength={10}
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Street Address</label>
        <input
          type="text"
          placeholder="#102, Street 15"
          required
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Landmark</label>
        <input
          type="text"
          placeholder="Opp. ICICI ATM, Vikhroli"
          required
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>ZIP/Pincode</label>
        <input
          type="number"
          placeholder="400083"
          required
          value={pincode}
          onChange={(e) => pincodeHandler(e)}
        />
      </div>
      <div className="input-group">
        <label>City</label>
        <select required value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Please Select</option>
          {cityOptions.map((cityOption, index) => (
            <option value={cityOption.Name} key={index}>
              {cityOption.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>State / Territory</label>
        <input type="text" required disabled value={territory} />
      </div>
      <button type="submit">Add Address</button>
    </form>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(index);
