import API from "../api/axiosConfig";

export const getAllProducts = () => {
return API.get("/products");
};

export const getProductById = (id) => {
return API.get(`/products/${id}`);
};

export default {
getAllProducts,
getProductById,
};
