import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import logo from "../../../public/img/logo2.jpg";
import { BsSearch, BsHeart } from "react-icons/bs";
import Link from "next/link";
export const Header = ({ state, homepage }) => {
  return (
    <>
      {homepage ? (
        <div className="header homepage">
          <Image className="header__logo" src={logo} alt="Orealfit Logo" />
          <Link href="/search">
            <div className="header___searchIcon">
              <p>Search</p>
              <BsSearch />
            </div>
          </Link>
          <Link href="/wishlist" className="header___wishlist">
            <BsHeart color="red" fill="red" />
          </Link>
        </div>
      ) : (
        <div>header</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
