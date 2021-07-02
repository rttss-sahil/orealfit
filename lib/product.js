import api from "./api";

export const getProductData = async (id) =>
  await fetch(`${api.apiUrl}/product/${id}`).then((res) => res.json());

export function getAllProductIds() {
  return [
    {
      params: { slug: "2929" },
    },
  ];
}
