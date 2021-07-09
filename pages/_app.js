// import "../styles/globals.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/fonts.css";

// CSS
import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/Cart.css";
import "../styles/Footer.css";
import "../styles/Products.css";
import "../styles/Product.css";
import "../styles/Wishlist.css";
import "../styles/HomePageCategories.css";
import "../styles/Category.css";
import "../styles/Alert.css";
import "../styles/More.css";
import "../styles/ForgotPassword.css";
import "../styles/UserForm.css";

import "../styles/404.css";
import "../styles/CartProduct.css";

import "react-awesome-slider/dist/styles.css";

import { Provider } from "react-redux";
import store from "../store";
import React from "react";

import Header from "../components/Major/Header";
import Footer from "../components/Major/Footer";

import Alert from "../components/Minor/Alert";
import actions from "../store/actions/actions";
import api from "../lib/api";

function MyApp({ Component, pageProps }) {
  React.useEffect(async () => {
    if (
      localStorage.getItem("loggedIn") === "true" &&
      localStorage.getItem("email")
    ) {
      const wishlistItems = await fetch(api.apiUrl + "/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      }).then((res) => res.json());
      const cartItems = await fetch(api.apiUrl + "/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      }).then((res) => res.json());
      Promise.all([
        store.dispatch(
          actions.addUser({
            loggedIn: true,
            user: {
              email: localStorage.getItem("email"),
              name: localStorage.getItem("name") || "Unnamed",
            },
          })
        ),
        store.dispatch(actions.addDirectlyToCart(cartItems.cart)),
        store.dispatch(actions.addDirectlyToWishlist(wishlistItems.wishlist)),
      ]);
    }
  });
  return (
    <Provider store={store}>
      <Header homepage={true} />
      <Alert />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
