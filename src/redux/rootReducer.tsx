import {combineReducers} from '@reduxjs/toolkit';
import {userSlice, questionSlice, soundSlice} from './reducers';

const rootReducer = combineReducers({
  user: userSlice,
  question: questionSlice,
  sound: soundSlice,
});

export default rootReducer;
