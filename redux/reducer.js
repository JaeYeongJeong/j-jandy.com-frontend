import { SET_MOBILE, SET_LOGIN } from './actions';

const initialState = {
  isMobile: false,
  isLogin: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;