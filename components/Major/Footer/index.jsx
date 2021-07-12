import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";

export const Footer = ({ state }) => {
  const [url, setUrl] = React.useState("");
  // React.useEffect(() => {
  //   process.env.NODE_ENV === "development"
  //     ? setUrl(document.URL.slice(22))
  //     : setUrl(document.URL.slice(22));
  // }, [document && document.URL]);
  return (
    <div className="footer">
      <Link href="/" className="footer-item-link">
        <div className={`footer-item ${url === "" && " active"}`}>
          <BiHomeCircle />
          Home
        </div>
      </Link>
      <Link
        href="/category"
        className={`footer-item ${url === "category" && " active"}`}
      >
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
      <Link
        href="/cart"
        className={`footer-item ${url === "cart" && " active"}`}
      >
        <div className="footer-item">
          <FiShoppingCart />
          Cart ({state.cart.length})
        </div>
      </Link>
      <Link href="/more" className="footer-item">
        <div className={`footer-item ${url === "more" && " active"}`}>
          <GiHamburgerMenu />
          More
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
