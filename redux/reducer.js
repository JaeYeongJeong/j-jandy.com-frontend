import { SET_MOBILE, SET_AUTHENTICATED } from './actions';

const initialState = {
  isMobile: false,
  isAuthenticated: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;