import AuthService from "../../api/services/AuthService";
import { logIn, REGISTRATE_USER, setIsFetch } from "../store/client/loginReducer";
import { put, takeEvery } from 'redux-saga/effects';

function* registrationWorker({ payload }) {
   try {
      const { login, password, firstName, lastName } = payload;
      yield put(setIsFetch(true));
      const response = yield AuthService.registration(login, password, firstName, lastName);
      localStorage.setItem('token', response.data.accessToken);
      yield put(logIn({ login, password }));
   } catch (e) {
      console.log(e.response?.data?.massage);
   } finally {
      yield put(setIsFetch(false));
   }
}

export function* registrationWatcher() {
   yield takeEvery(REGISTRATE_USER, registrationWorker);
}