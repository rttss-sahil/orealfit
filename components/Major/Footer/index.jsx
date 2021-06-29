import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

export const Footer = (props) => {
  return (
    <div className="footer">
      <Link href="/" className="footer-item">
        Home
      </Link>
      <Link href="/category" className="footer-item">
        Categories
      </Link>
      <Link href="/shop" className="footer-item">
        Shop
      </Link>
      <Link href="/cart" className="footer-item">
        Cart
      </Link>
      <Link href="/more" className="footer-item">
        More
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
