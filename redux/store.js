import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, notesReducer } from './reducer';

const rootReducer = combineReducers({
  app: appReducer,
  notes: notesReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;