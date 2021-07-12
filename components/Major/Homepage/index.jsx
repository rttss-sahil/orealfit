import React from "react";

import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";

import AwesomeSlider from "react-awesome-slider";
import slider1 from "../../../public/img/slider/img1.jpg";
import slider2 from "../../../public/img/slider/img2.jpg";
import slider3 from "../../../public/img/slider/img3.jpg";

import sportSupplements from "../../../public/img/shop-by-categories/sport-supplements.webp";
import healthyFood from "../../../public/img/shop-by-categories/healthy-food.webp";
import vitaminAndHealth from "../../../public/img/shop-by-categories/vitamins-and-health.webp";
import sportswearAndAccessories from "../../../public/img/shop-by-categories/sportswear-and-accessories.webp";

import topSellers from "../../../public/json/top-sellers.json";

export const HomePage = ({ state, dispatch }) => {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="slider-all">
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

        {!state.user.loggedIn && (
          <>
            <p>Become a member of Orealfit,</p>
            <Link href="/signup">Join Us</Link>
          </>
        )}
      </div>
      <div className="shop-by-categories">
        <h2>Shop by Categories</h2>
        <div className="shop-by-categories-all">
          <div className="shop-by-categories-item">
            <Image src={sportSupplements} objectFit="fill" />
            <Link href="/">Sports Supplements</Link>
            <Link href="/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={healthyFood} objectFit="fill" />
            <Link href="/">Healthy Food</Link>
            <Link href="/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={vitaminAndHealth} objectFit="fill" />
            <Link href="/">Vitamin And Health</Link>
            <Link href="/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={sportswearAndAccessories} objectFit="fill" />
            <Link href="/">Sports Wear And Accessories</Link>
            <Link href="/">Start Shopping</Link>
          </div>
        </div>
      </div>
      <div className="top-sellers">
        <h2>Top Sellers</h2>
        <div className="top-sellers-all">
          {topSellers.map((product) => (
            <div className="top-sellers-item" key={product.id}>
              <div>
                <Image src={product.images[0].src} height={200} width={200} />
              </div>
              <p>{product.name}</p>
              <div className="bottom">₹{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({
  state,
  dispatch,
});

export default connect(mapStateToProps)(HomePage);
