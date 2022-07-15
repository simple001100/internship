import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createStore } from "redux";
import loginReducer from "./client/loginReducer";
import registerReducer from "./client/registerReducer";
import categoryReducer from "./categories/categoryReducer";
import userReducer from "./users/userReducer";
import { rootWatcher } from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    categoryReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);