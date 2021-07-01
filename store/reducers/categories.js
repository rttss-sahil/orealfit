import actionTypes from "../actions/actionTypes";
import helperMethods from "../helper/find";
const initialState = { categories: helperMethods.getAllCategories() };

const Categories = (state = initialState, action) => {
  let newState;
  console.log(state);
  switch (action.type) {
    case actionTypes.addProductToCart:
      newState = { ...state, products: [{ name: "abc" }] };
      return newState;

    case actionTypes.removeProductFromCart:
      newState = { ...state };
      return newState;

    default:
      return state;
  }
};

export default Categories;
