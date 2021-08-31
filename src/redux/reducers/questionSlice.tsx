import {createSlice} from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    data: {
      id: 'z',
      question: '',
      A: '',
      B: '',
      C: '',
      D: '',
      Correct: '',
      Status: 0,
    },
  },
  reducers: {
    setDataQuestion: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setDataQuestion} = questionSlice.actions;
export default questionSlice.reducer;
