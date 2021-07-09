import React from "react";
import { connect } from "react-redux";

import Image from "next/image";

export const CartProduct = ({ state, dispatch, product, removeFromCart }) => {
  const [count, SetCount] = React.useState(1);
  return (
    <div className="cart-page-item" key={product.id}>
      <div className="item-top">
        <div className="item-top-left">
          <p>{product.name.slice(0, 40)}...</p>
          <div className="item-attributes">
            {product.attributes &&
              product.attributes.map((attribute, index) => (
                <div className="attribute" key={index}>
                  <div className="attribute-name">{attribute.name} :</div>
                  <div className="attribute-option">
                    {attribute.options.length <= 1 && attribute.options[0]},
                  </div>
                </div>
              ))}
          </div>
          <p>Seller: Orealfit Inc.</p>
        </div>
        <div className="item-top-right">
          <Image src={product.images[0].src} height="100" width="100" />
        </div>
      </div>
      <div className="item-mid">
        <div className="item-mid-left">
          <p>₹ {product.price}</p>
          <p>₹ {product.regular_price || Number(product.price) + 200}</p>
          <p>
            {(
              (((product.regular_price || Number(product.price) + 200) -
                product.price) /
                (product.regular_price || Number(product.price) + 200)) *
              100
            ).toFixed(0)}{" "}
            %
          </p>
        </div>
        <div className="item-mid-right">
          {product.stock_status !== "outofstock" && (
            <>
              <label>Qty: </label>
              <select>
                <option
                  value={
                    product.stock_status !== "outofstock" &&
                    product.stock_quantity
                  }
                >
                  {product.stock_status !== "outofstock" &&
                    product.stock_quantity}
                </option>
                //{" "}
              </select>
            </>
          )}
        </div>
      </div>
      <div className="item-bottom" onClick={() => removeFromCart(product)}>
        Remove from Bag
      </div>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(CartProduct);
