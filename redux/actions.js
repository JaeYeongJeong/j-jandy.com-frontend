import { fetchNotes } from '../src/Util/http';

export const SET_MOBILE = 'SET_MOBILE';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_USER = 'SET_USER';
export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const setMobile = (isMobile) => ({
  type: SET_MOBILE,
  payload: isMobile,
});

export const setAuthenticated = (isAuthenticated) => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUEST,
});

export const fetchNotesSuccess = (notes) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes,
});

export const fetchNotesFailure = (error) => ({
  type: FETCH_NOTES_FAILURE,
  payload: error,
});

export const deleteNoteAction = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId,
})

export const fetchNotesAction = () => {
  return async (dispatch) => {
    dispatch(fetchNotesRequest());
    try {
      const notes = await fetchNotes({});
      dispatch(fetchNotesSuccess(notes));
    } catch (error) {
      dispatch(fetchNotesFailure(error.message));
    }
  };
};
