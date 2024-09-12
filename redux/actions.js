export const SET_MOBILE = 'SET_MOBILE';
export const SET_HOME = 'SET_HOME';

export const setMobile = (isMobile) => ({
  type: SET_MOBILE,
  payload: isMobile,
});

export const setHome = (isHome) => ({
  type: SET_HOME,
  payload: isHome,
});