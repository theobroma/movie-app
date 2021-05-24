import { createSlice } from '@reduxjs/toolkit';
import { ThemeColorsType } from '../../@types';

const uiInitialState = {
  theme: 'dark' as ThemeColorsType,
};

export type UIInitialStateType = typeof uiInitialState;

export const slice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
  },
});

export const uiReducer = slice.reducer;
export const { setThemeAC } = slice.actions;
