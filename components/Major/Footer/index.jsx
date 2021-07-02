import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";

export const Footer = (props) => {
  return (
    <div className="footer">
      <Link href="/" className="footer-item">
        <div className="footer-item">
          <BiHomeCircle />
          Home
        </div>
      </Link>
      <Link href="/category" className="footer-item">
        <div className="footer-item">
          <FaList />
          Categories
        </div>
      </Link>
      {/* <Link href="/shop" className="footer-item">
        <div className="footer-item">
          <AiFillShop />
          Shop
        </div>
      </Link> */}
      <Link href="/cart" className="footer-item">
        <div className="footer-item">
          <FiShoppingCart />
          Cart
        </div>
      </Link>
      <Link href="/more" className="footer-item">
        <div className="footer-item">
          <GiHamburgerMenu />
          More
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
