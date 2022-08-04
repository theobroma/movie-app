import { createSlice } from '@reduxjs/toolkit';

import type { ThemeColorsType } from '../../@types';

const uiInitialState = {
  theme: 'light' as ThemeColorsType,
  language: 'en' as string,
};

// export type UIInitialStateType = typeof uiInitialState;

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
    setLanguageAC(state, action) {
      state.language = action.payload;
    },
  },
});

// export const uiReducer = uiSlice.reducer;
export const { setThemeAC, setLanguageAC } = uiSlice.actions;
