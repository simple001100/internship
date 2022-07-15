import api from "../http/index";
import 'dotenv/config';

const getCart = () =>
   api.get(`${process.env.REACT_APP_API_URL}/cart`, { withCredentials: true });

const addToCart = (id, quantity) =>
   api.post(`/cart/?id=${id}&quantity=${quantity}`, { withCredentials: true });

const removeFromCart = (id) =>
   api.delete(`/cart/?id=${id}`, { withCredentials: true });

const updateProductCart = (id, quantity) =>
   api.patch(`/cart/?id=${id}&quantity=${quantity}`, { withCredentials: true });

export default { getCart, addToCart, removeFromCart, updateProductCart };
