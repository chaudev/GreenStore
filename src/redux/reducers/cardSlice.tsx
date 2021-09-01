import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCardData = async (param: object): Promise<void> => {
  try {
    await AsyncStorage.setItem('card', JSON.stringify(param));
  } catch (error) {
    console.log(error);
  }
};

export const getCardData = async (dispatch: any): Promise<void> => {
  try {
    const res = await AsyncStorage.getItem('card');
    dispatch(initData(res != null ? JSON.parse(res) : null));
  } catch (error) {
    console.log(error);
  }
};

export const Card = createSlice({
  name: 'card',
  initialState: {
    data: [],
  },
  reducers: {
    initData: (state, action) => {
      if (action.payload.type == 'card/setDataMenu') {
        state.data = action.payload.payload;
      } else {
        state.data = action.payload;
      }
    },
    setDataMenu: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setDataMenu, initData} = Card.actions;
export default Card.reducer;
