import actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};

const ProductsList = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProductToPage:
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
