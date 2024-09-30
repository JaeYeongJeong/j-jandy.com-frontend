export const SET_MOBILE = 'SET_MOBILE';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

export const setMobile = (isMobile) => ({
  type: SET_MOBILE,
  payload: isMobile,
});

export const setAuthenticated = (isAuthenticated) => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});