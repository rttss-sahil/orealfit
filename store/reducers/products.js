import actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};

const Products = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addProducts:
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;
    default:
      return state;
  }
};

export default Products;
