import { SET_MOBILE, SET_HOME } from './actions';

const initialState = {
  isMobile: false,
  isHome: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };
    case SET_HOME:
      return {
        ...state,
        isHome: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;