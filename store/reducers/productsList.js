import actionTypes from "../actions/actionTypes";
import helperMethods from "../helper/find";
const initialState = [];

const ProductsList = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProductToPage:
      // const list = helperMethods.
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;

    case actionTypes.removeProductFromPage:
      newState = { ...state };
      return newState;

    default:
      return state;
  }
};

export default ProductsList;
