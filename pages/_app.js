// import "../styles/globals.css";
import "../styles/dist/global.css";
import "../styles/dist/variables.css";
import "../styles/dist/fonts.css";

// CSS
import "../styles/modules/Home.css";
import "../styles/modules/Header.css";
import "../styles/modules/Cart.css";
import "../styles/modules/Footer.css";
import "../styles/modules/Products.css";
import "../styles/modules/Wishlist.css";
import "../styles/modules/HomePageCategories.css";

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
