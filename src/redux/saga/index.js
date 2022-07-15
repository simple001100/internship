import { all } from 'redux-saga/effects';
import { cartWatcher } from './cartSaga';
import { loginWatcher } from "./loginSaga";
import { productWatcher } from './productSaga';
import { registrationWatcher } from './registrationSaga';

export function* rootWatcher() {
   yield all([loginWatcher(), cartWatcher(), productWatcher(), registrationWatcher()]);
}