const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://orealfit-backend.herokuapp.com";

const api = {
  apiUrl,
};

export default api;
