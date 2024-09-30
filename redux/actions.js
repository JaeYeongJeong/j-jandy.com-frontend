export const SET_MOBILE = 'SET_MOBILE';
export const SET_LOGIN = 'SET_LOGIN';

export const setMobile = (isMobile) => ({
  type: SET_MOBILE,
  payload: isMobile,
});

export const setLogin = (isLogin) => ({
  type: SET_LOGIN,
  payload: isLogin,
});