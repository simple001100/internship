
const initialState = {
  isReg: true,
};

export const REGISTER_USER = "REGISTER_USER";
export const SET_ISREGISTER = "SET_ISREGISTER";

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISREGISTER:
      return { ...state, isReg: !state.isAuth };
    default:
      return state;
  }
}

export const registerUser = (payload) => ({ type: REGISTER_USER, payload });
export const setIsRegister = () => ({ type: SET_ISREGISTER });
