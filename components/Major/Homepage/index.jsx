import React from "react";

import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";

import AwesomeSlider from "react-awesome-slider";
import slider1 from "../../../public/img/slider/img1.jpg";
import slider2 from "../../../public/img/slider/img2.jpg";
import slider3 from "../../../public/img/slider/img3.jpg";

export const HomePage = ({ state, dispatch }) => {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="container">
        <AwesomeSlider>
          <div className="slider-item">
            <Image src={slider1} height="300" width="300" />
          </div>
          <div className="slider-item">
            <Image src={slider2} height="300" width="300" />
          </div>
          <div className="slider-item">
            <Image src={slider3} height="300" width="300" />
          </div>
        </AwesomeSlider>

        {/* {!state.user.loggedIn && (
          <>
            <p>Become a member of Orealfit,</p>
            <Link href="/signup">Join Us</Link>
          </>
        )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(HomePage);
