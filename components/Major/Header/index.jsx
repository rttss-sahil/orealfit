import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import logo from "../../../public/img/logo2.jpg";
import { BsSearch, BsHeartFill } from "react-icons/bs";
import Link from "next/link";
export const Header = ({ state, homepage }) => {
  return (
    <>
      {homepage ? (
        <div className="header homepage">
          <Link href="/">
            <Image className="header__logo" src={logo} alt="Orealfit Logo" />
          </Link>
          {!state.user.loggedIn ? (
            <p className="header-link">Welcome, Guest.
            <Link href="/login">Login</Link>
            </p>
          ) : (
            <p className="header-link">Welcome back, {state.user.user.name}</p>
          )}
          {/* <Link href="/search">
            <div className="header___searchIcon">
              <p>Search</p>
              <BsSearch />
            </div>
          </Link> */}
          <Link href="/wishlist" className="header___wishlist">
            <div>
              <BsHeartFill color="red" fill="red" />
              {state.wishlist.length}
            </div>
          </Link>
        </div>
      ) : (
        <div>header</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
