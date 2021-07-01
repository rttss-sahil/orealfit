import products from "../../json/products.json";
import categories from "../../json/categories.json";

const helperMethods = {
  findProductByID: (pid) => products.find((p) => p.id === pid),
  findCategoryByID: (cid) => categories.find((c) => c.id === cid),
  // findProductBycategory: (cid) =>
};
