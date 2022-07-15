import { put, takeEvery } from 'redux-saga/effects'
import ProductService from '../../api/services/ProductService';
import { GET_ADVERTISING, GET_CATEGORY_PAGE, GET_PRODUCT, setAdvertising, setCategoryPage } from '../store/categories/categoryReducer';
import { setIsFetch } from '../store/client/loginReducer';

function* getProductsCategoryWorker({ payload }) {
   try {
      const type = payload;
      yield put(setIsFetch(true));
      const response = yield ProductService.getProductCategory(type);
      yield put(setCategoryPage(response.data));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

function* getProductWorker({ payload }) {
   try {
      const id = payload;
      yield put(setIsFetch(true));
      const response = yield ProductService.getProduct(id);
      yield put(setCategoryPage([response.data]));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

function* getAdvertisingWorker() {
   try {
      yield put(setIsFetch(true));
      const response = yield ProductService.getAdvertising();
      yield put(setAdvertising(response.data));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

export function* productWatcher() {
   yield takeEvery(GET_CATEGORY_PAGE, getProductsCategoryWorker);
   yield takeEvery(GET_PRODUCT, getProductWorker);
   yield takeEvery(GET_ADVERTISING, getAdvertisingWorker);
}