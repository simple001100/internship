import api from "../http/index";
import 'dotenv/config';

const registration = (login, password, firstName, lastName) =>
   api.post(`/user/registration`, { login, password, firstName, lastName });

const login = (login, password) =>
   api.post(`/user/login`, { login, password });

const logout = () =>
   api.post(`/user/logout`);

const refresh = () =>
   api.get(`${process.env.REACT_APP_API_URL}/user/refresh`, { withCredentials: true });

export default { login, logout, refresh, registration };