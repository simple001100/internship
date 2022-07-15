import { put, takeEvery } from 'redux-saga/effects'
import { addToCart, ADD_PRODUCT_TO_CART, deleteFromCart, GET_CART, REMOVE_PRODUCT, setCart } from "../store/users/userReducer";
import CartService from '../../api/services/CartService';
import { setIsFetch } from '../store/client/loginReducer';

function* getCartWorker() {
   try {
      yield put(setIsFetch(true));
      const response = yield CartService.getCart();
      yield put(setCart([...response.data]));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

function* addToCartWorker({ payload }) {
   try {
      const { id, quantity } = payload;
      yield put(setIsFetch(true));
      const response = yield CartService.addToCart(id, quantity);
      yield put(addToCart(response.data));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

function* removeFromCartWorker({ payload }) {
   try {
      yield put(setIsFetch(true));
      yield CartService.removeFromCart(payload);
      yield put(deleteFromCart(payload));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

export function* cartWatcher() {
   yield takeEvery(REMOVE_PRODUCT, removeFromCartWorker);
   yield takeEvery(GET_CART, getCartWorker);
   yield takeEvery(ADD_PRODUCT_TO_CART, addToCartWorker);
}