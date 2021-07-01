import products from "../json/products.json";
import categories from "../json/categories.json";

const helperMethods = {
  findProductByID: (id) => products.find((p) => p.id === id),
  findCategoryByID: (id) => categories.find((c) => c.id === id),
};
