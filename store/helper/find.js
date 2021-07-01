import api from "../../lib/api";

const helperMethods = {
  findProductByID: async (pid) => {
    const product = await fetch(`${api.apiUrl}/product/${pid}`).then((res) =>
      res.json()
    );
    return product;
  },
  findCategoryByID: async (cid) => {
    const category = await fetch(`${api.apiUrl}/category/${cid}`)
      .then((res) => res.json())
      .then((data) => data);
  },
  // findProductBycategory: (cid) =>
  getAllCategories: async () =>
    await fetch(`${api.apiUrl}/category/all`).then((res) => res.json()),
};

export default helperMethods;
