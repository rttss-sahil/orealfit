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

import "react-awesome-slider/dist/styles.css";

import { Provider } from "react-redux";
import store from "../store";
import React from "react";

import Header from "../components/Major/Header";
import Footer from "../components/Major/Footer";

import Alert from "../components/Minor/Alert";
import actions from "../store/actions/actions";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // if (
    //   localStorage.getItem("loggedIn") === "true" &&
    //   localStorage.getItem("email")
    // )
    //   store.dispatch(
    //     actions.addUser({
    //       loggedIn: true,
    //       user: {
    //         email: localStorage.getItem("email"),
    //         name: localStorage.getItem("name") || "Unnamed",
    //       },
    //     })
    //   );
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
