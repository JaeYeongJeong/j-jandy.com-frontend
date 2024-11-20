import { SET_MOBILE, SET_AUTHENTICATED, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE, DELETE_NOTE, SET_USER } from './actions';

const initialAppState = {
  isMobile: false,
  isAuthenticated: false,
  user: '',
};

const initialNotesState = {
  notes: [],
  loading: false,
  error: null,
};

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return { ...state, isMobile: action.payload, };
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload, };
    case SET_USER:
      return { ...state, user: action.payload, };
    default:
      return state;
  }
};

const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NOTES_SUCCESS:
      return { ...state, loading: false, notes: action.payload };
    case FETCH_NOTES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
}

export { appReducer, notesReducer };