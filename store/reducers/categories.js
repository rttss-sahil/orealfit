import actionTypes from "../actions/actionTypes";
import helperMethods from "../helper/find";
import categories from "../../json/categories.json";
const initialState = categories;

const Categories = (state = initialState, action) => {
  let newState;
  console.log("state", state.length);
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
