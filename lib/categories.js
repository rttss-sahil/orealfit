import api from "./api";

export const getPostData = async (slug) =>
  fetch(`${api.apiUrl}/category/${slug}`).then((res) => res.json());

export function getAllPostIds() {
  return [
    {
      params: {
        id: "amino",
      },
    },
  ];
}
