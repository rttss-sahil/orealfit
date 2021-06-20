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
import "../styles/Wishlist.css";
import "../styles/HomePageCategories.css";

import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
