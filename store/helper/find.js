import products from "../../json/products.json";
import categories from "../../json/categories.json";

import api from "../../lib/api";

const helperMethods = {
  findProductByID: (pid) => products.find((p) => p.id === pid),
  findCategoryByID: (cid) => categories.find((c) => c.id === cid),
  // findProductBycategory: (cid) =>
  getAllCategories: async () => {
    const categories = await fetch(`${api.apiUrl}/category/all`).then((res) =>
      res.json()
    );
    console.log(categories);
    return categories;
  },
};

export default helperMethods;
