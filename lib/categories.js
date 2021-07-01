import api from "./api";

export const getPostData = async (slug) => {
  const productsFromCategory = await fetch(
    `${api.apiUrl}/category/${slug}`
  ).then((data) => data.json());
  return productsFromCategory;
};

export function getAllPostIds() {
  return [
    {
      params: {
        id: "alaska",
      },
    },
  ];
}
