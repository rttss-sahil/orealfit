import actionTypes from "../actions/actionTypes";

const initialState = { products: [] };

const Products = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProductToCart:
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;

    case actionTypes.removeProductFromCart:
      newState = { ...state };

    default:
      return state;
  }
};

export default Products;
