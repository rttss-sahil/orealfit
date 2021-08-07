import React from "react";

import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";

import Product from '../../Major/Product';

import AwesomeSlider from "react-awesome-slider";
import slider1 from "../../../public/img/slider/slideshow-1.jpg";
import slider2 from "../../../public/img/slider/slideshow-2.jpg";
import slider3 from "../../../public/img/slider/slideshow-3.jpg";

import sportSupplements from "../../../public/img/shop-by-categories/sport-supplements.webp";
import healthyFood from "../../../public/img/shop-by-categories/healthy-food.webp";
import vitaminAndHealth from "../../../public/img/shop-by-categories/vitamins-and-health.webp";
import sportswearAndAccessories from "../../../public/img/shop-by-categories/sportswear-and-accessories.webp";

import bpi from "../../../public/img/logos/bpi.jpg";
import cellucor from "../../../public/img/logos/cellucor.png";
import klev from "../../../public/img/logos/klev.png";
import mhp from "../../../public/img/logos/mhp.jpg";
import need from "../../../public/img/logos/need.png";
import nutrex from "../../../public/img/logos/nutrex.png";
import pureNutrition from "../../../public/img/logos/pure-nutrition.jpg";
import reload from "../../../public/img/logos/reload.jpg";
import rule1 from "../../../public/img/logos/rule1.jpg";
import scivation from "../../../public/img/logos/scivation.jpg";
import ssan from "../../../public/img/logos/Ssan.png";
import sunline from "../../../public/img/logos/sunline.jpg";

import topSellers from "../../../public/json/top-sellers.json";
import actions from "../../../store/actions/actions";

export const HomePage = ({ state, dispatch }) => {
  const removeFromWishlist = (product) => {
    dispatch(
      actions.removeProductFromWishlist({
        product,
        email: state.user.user.email,
      })
    );
  },
  addToWishlist = (product) => {
    dispatch(
      actions.addProductToWishlist({ product, email: state.user.user.email })
    );
  };
  return (
    <div className="home-page">
      <h1>Home</h1>
      <div className="slider-all">
        <AwesomeSlider>
          <div className="slider-item">
            <Image src={slider1} />
          </div>
          <div className="slider-item">
            <Image src={slider2} />
          </div>
          <div className="slider-item">
            <Image src={slider3} />
          </div>
        </AwesomeSlider>
      </div>

      {!state.user.loggedIn && (
        <div className="log-yourself-in">
          <p>Already a member, or new here?</p>
          <p>Whatever your reason, </p>
          <Link href="/login">Login / Register</Link>
        </div>
      )}
      <div className="shop-by-categories">
        <h2>Shop by Categories</h2>
        <div className="shop-by-categories-all">
          <div className="shop-by-categories-item">
            <Image src={sportSupplements} objectFit="fill" />
            <Link href="/">Proteins</Link>
            <Link href="/category/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={healthyFood} objectFit="fill" />
            <Link href="/">Gainers</Link>
            <Link href="/category">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={sportswearAndAccessories} objectFit="fill" />
            <Link href="/">Pre / Post Workout</Link>
            <Link href="/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={sportswearAndAccessories} objectFit="fill" />
            <Link href="/">Fat Loss</Link>
            <Link href="/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={vitaminAndHealth} objectFit="fill" />
            <Link href="/">Vitamins And Essential</Link>
            <Link href="/">Start Shopping</Link>
          </div>
        </div>
      </div>
      <div className="top-sellers">
        <h2>Top Sellers</h2>
        <div className="top-sellers-all">
            {/* <Link href={`/product/${product.id}`} key={product.id}>
            <div className="top-sellers-item" > */}
          {topSellers.map((product) => (
            <Product
            product={product}
            key={product.id}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
              {/* <div>
                <Image src={product.images[0].src} height={150} width={150} />
              </div>
              <p>{product.name}</p>
              <div className="bottom">₹{product.price}</div> */}
            {/* </div> */}
            {/* </Link> */}
      </div>
      <div className="logos">
        <h2>Featured Brands</h2>
        <div className="logo-images">
          <div className="logo-row">
            <Image src={bpi} />
            <Image src={cellucor} />
            <Image src={pureNutrition} />
            <Image src={mhp} />
          </div>
          <div className="logo-row">
            <Image src={need} />
            <Image src={nutrex} />
            <Image src={klev} />
            <Image src={reload} />
          </div>
          <div className="logo-row">
            <Image src={scivation} />
            <Image src={rule1} />
            <Image src={ssan} />
            <Image src={sunline} />
          </div>
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
