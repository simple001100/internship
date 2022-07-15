const initialState = {
  advertising: [],
  phone: [],
  laptop: [],
  watch: [],
  videocard: [],
  processor: [],
  ssd: [],
};

export const GET_CATEGORY_PAGE = "GET_CATEGORY_PAGE";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_ADVERTISING = "GET_ADVERTISING";
export const SET_ADVERTISING = "SET_ADVERTISING";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_CATEGORY_PAGE = "SET_CATEGORY_PAGE";

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_PAGE: {
      const data = action.payload;
      const category = data[0].type;
      return { ...state, [category]: [...data] };
    }
    case SET_ADVERTISING: {
      const data = action.payload;
      return { ...state, advertising: [...data] };
    }
    default:
      return state;
  }
}

export const getAdvertising = () => ({ type: GET_ADVERTISING });
export const setAdvertising = (payload) => ({ type: SET_ADVERTISING, payload });
export const getCategoryPage = (payload) => ({ type: GET_CATEGORY_PAGE, payload });
export const getProduct = (payload) => ({ type: GET_PRODUCT, payload });
export const setCategoryPage = (payload) => ({
  type: SET_CATEGORY_PAGE,
  payload,
});
