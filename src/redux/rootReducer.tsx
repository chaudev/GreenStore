import {combineReducers} from '@reduxjs/toolkit';
import {userSlice, questionSlice, soundSlice, card} from './reducers';

const rootReducer = combineReducers({
  user: userSlice,
  question: questionSlice,
  sound: soundSlice,
  card: card,
});

export default rootReducer;
