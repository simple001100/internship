import api from "../http/index";

const getProductCategory = (type) =>
   api.get(`/product/`, { params: { type } });

const getAdvertising = () =>
   api.get(`/product/advertising`);

const getProduct = (id) =>
   api.get(`/product/${id}`);

export default { getProductCategory, getProduct, getAdvertising };