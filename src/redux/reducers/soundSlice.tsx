import {createSlice} from '@reduxjs/toolkit';

export const soundSlice = createSlice({
  name: 'sound',
  initialState: {
    data: true,
  },
  reducers: {
    setDataSound: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setDataSound} = soundSlice.actions;
export default soundSlice.reducer;
