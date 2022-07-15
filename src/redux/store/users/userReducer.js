const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  avatar: "https://mui.com/static/images/avatar/1.jpg",
  cart: [],
};

export const GET_USER_DATA = "GET_PERSONAL_DATA";
export const SET_CART = "SET_CART";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const UPDATE_PRODUCT_CART = "UPDATE_PRODUCT_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SET_USER_DATA = "SET_USER_DATA";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      const { id, firstName, lastName, avatar } = action.payload;
      return { ...state, firstName, lastName, avatar, id };
    }
    case SET_CART: {
      return { ...state, cart: [...action.payload] };
    }
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case UPDATE_PRODUCT_CART: {
      const { id, quantity } = action.payload;
      state.cart[id].quantity = quantity;
      return { ...state, cart: [...state.cart, state.cart[id]] };
    }
    case REMOVE_FROM_CART: {
      const cart = state.cart;
      const indexToRemove = cart.indexOf(cart.find(el => el.product.id === action.payload));
      return { ...state, cart: [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)] };
    }
    default:
      return state;
  }
}

export const getUserData = () => ({ type: GET_USER_DATA });
export const setCart = (payload) => ({ type: SET_CART, payload });
export const getCart = () => ({ type: GET_CART });
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addProductToCart = (payload) => ({ type: ADD_PRODUCT_TO_CART, payload });
export const updateProductCart = (payload) => ({ type: UPDATE_PRODUCT_CART, payload });
export const deleteFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
export const deleteProduct = (payload) => ({ type: REMOVE_PRODUCT, payload });
export const setUserData = (payload) => ({ type: SET_USER_DATA, payload });
