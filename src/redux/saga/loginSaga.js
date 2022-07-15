import { put, takeEvery } from 'redux-saga/effects';
import { CHECK_ISAUTH, LOGIN_USER, LOGOUT_USER, setIsAuth, setIsFetch } from "../store/client/loginReducer";
import AuthService from "../../api/services/AuthService";
import { getCart, setUserData } from "../store/users/userReducer";
import { getAdvertising } from '../store/categories/categoryReducer';

function* loginWorker({ payload }) {
   try {
      const { login, password } = payload;
      yield put(setIsFetch(true));
      const response = yield AuthService.login(login, password);
      localStorage.setItem('token', response.data.accessToken);
      yield put(setIsAuth(true));
      yield put(setUserData(response.data.user));
      yield put(getCart());
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

function* logoutWorker() {
   try {
      const response = yield AuthService.logout();
      localStorage.removeItem('token');
      yield put(setIsAuth(false));
      yield put(setUserData(response.data.user));
   } catch (e) {
      console.log(e.response?.data?.massage);
   }
}

function* checkAuthWorker() {
   try {
      yield put(setIsFetch(true));
      yield put(getAdvertising());
      yield put(getCart());
      const response = yield AuthService.refresh();
      localStorage.setItem('token', response.data.accessToken);
      yield put(setIsAuth(true));
      yield put(setUserData(response.data.user));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

export function* loginWatcher() {
   yield takeEvery(LOGIN_USER, loginWorker);
   yield takeEvery(LOGOUT_USER, logoutWorker);
   yield takeEvery(CHECK_ISAUTH, checkAuthWorker);
}