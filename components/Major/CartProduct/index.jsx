import React from "react";
import { connect } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import actions from "../../../store/actions/actions";

export const CartProduct = ({ state, dispatch, product, removeFromCart }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="cart-page-item" key={product.id}>
      <div className="item-top">
        <div className="item-top-left">
          <p>{product.name}</p>
          <div className="item-attributes">
            {product.selectedAttributes &&
              product.selectedAttributes.map((attribute, index) => (
                <div className="attribute" key={index}>
                  <div className="attribute-name">{attribute.name} :</div>
                  <div className="attribute-option">{attribute.option}
                  </div>
                </div>
              ))}
          </div>
          <p>Seller: Orealfit Inc.</p>
        </div>
        <div className="item-top-right">
        <Link href={`/product/${product.id}`}>
          <Image src={product.images[0].src} height="100" width="100" />
        </Link>
        </div>
      </div>
      <div className="item-mid">
        <div className="item-mid-left">
          <p>₹ {product.price * quantity}</p>
          <p>₹ {(product.regular_price*quantity) || (Number(product.price) + 200)*quantity}</p>
          <p>{"[Save " +
              (
                (((product.regular_price || Number(product.price) + 400) - Number(product.price)) /
                  (product.regular_price || Number(product.price) + 400)) *
                100
              ).toFixed(0) +
              "% off ]"}
          </p>
        </div>
        <div className="item-mid-right">
          {product.stock_status !== "outofstock" && (
            <>
              <label>Quantity: </label>
              <select defaultValue={product.quantity} onChange={e => {setQuantity(e.target.value);
              Promise.all([
                dispatch(actions.removeProductFromCart({product})), 
                dispatch(actions.addProductToCart(
                {
                  product: {...product, quantity},
                   email: state.user.user.email
                }
                   ))])}}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
