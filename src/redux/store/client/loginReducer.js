const initialState = {
  isAuth: false,
  isFetching: false
};

export const SET_FETCHING = "SET_FETCHING";
export const REGISTRATE_USER = "REGISTRATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHECK_ISAUTH = "CHECK_ISAUTH";
export const SET_ISAUTH = "SET_ISAUTH";

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISAUTH:
      return { ...state, isAuth: action.payload };
    case LOGIN_USER:
      return { ...state };
    case SET_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}

export const registrate = (payload) => ({ type: REGISTRATE_USER, payload });
export const logIn = (payload) => ({ type: LOGIN_USER, payload });
export const logOut = () => ({ type: LOGOUT_USER });
export const setIsAuth = (payload) => ({ type: SET_ISAUTH, payload });
export const setIsFetch = (payload) => ({ type: SET_FETCHING, payload });
export const checkIsAuth = () => ({ type: CHECK_ISAUTH });
