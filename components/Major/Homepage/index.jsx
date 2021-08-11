import React from "react";

import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";

import {FaUnlock} from 'react-icons/fa';
import {FiPhone, FiMail} from 'react-icons/fi';
import {TiTick} from 'react-icons/ti';
import {ImTruck} from 'react-icons/im';
import {HiOutlineQuestionMarkCircle} from 'react-icons/hi';


import Product from '../../Major/Product';

import AwesomeSlider from "react-awesome-slider";
import slider1 from "../../../public/img/slider/slideshow-1.jpg";
import slider2 from "../../../public/img/slider/slideshow-2.jpg";
import slider3 from "../../../public/img/slider/slideshow-3.jpg";

import proteins from "../../../public/img/shop-by-categories/proteins.jpg";
import gainers from "../../../public/img/shop-by-categories/Gainer.jpg";
import prepost from "../../../public/img/shop-by-categories/Pre Post.jpg";
import fatloss from "../../../public/img/shop-by-categories/normal_1460333_o.png";
import vitamins from "../../../public/img/shop-by-categories/vitamins.jpg";

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

      {/* {!state.user.loggedIn && (
        <div className="log-yourself-in">
          <p>Already a member, or new here?</p>
          <p>Whatever your reason, </p>
          <Link href="/login">Login / Register</Link>
        </div>
      )} */}
      <div className="shop-by-categories">
        <h2>Shop by Categories</h2>
        <div className="shop-by-categories-all">
          <div className="shop-by-categories-item">
            <Image src={proteins} objectFit="fill" />
            <div>Proteins</div>
            <Link href="/category/">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={gainers} objectFit="fill" />
            <div>Gainers</div>
            <Link href="/category">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={prepost} objectFit="fill" />
            <div>Pre / Post Workout</div>
            <Link href="/category">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={fatloss} objectFit="fill" />
            <div>Fat Loss</div>
            <Link href="/category">Start Shopping</Link>
          </div>
          <div className="shop-by-categories-item">
            <Image src={vitamins} objectFit="fill" />
            <div>Vitamins And Essential</div>
            <Link href="/category">Start Shopping</Link>
          </div>
        </div>
      </div>
      <div className="top-sellers">
        <h2>Top Sellers</h2>
        <div className="top-sellers-all">
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
      <div className="secure-listing">
        <ul>
          <li>
          <FaUnlock />
            <h3>100% Secure Payments</h3>
            <p>Secure checkout verified by Norton VeriSign.</p>
          </li>
          <li>
          <TiTick />
            <h3>100% Authentic Products</h3>
            <p>We only deal with original products</p>
          </li>
          <li>
          <ImTruck />
            <h3>Fast Delivery Service</h3>
            <p>Fast delivery, competitive prices and excellent services</p>
          </li>
        </ul>
      </div>
      <div className="got-a-question">
      <div>
        <HiOutlineQuestionMarkCircle />
        <h2>Got A Question?</h2>
        <p>We are here to help you! If you have any questions feel free to contact us through:</p>
        <div>
          <Link href="tel:91925009095">
            <div>
              <FiPhone />
              <p>Phone</p>
            </div>
          </Link>
          <Link href="mailto:info@orealfit.com">
            <div>
              <FiMail />
              <p>Email</p>
            </div>
          </Link>
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
