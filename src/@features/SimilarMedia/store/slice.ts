import { createSlice } from '@reduxjs/toolkit';

const similarInitialState = {
  data: [] as any,
};

export type SimilarInitialStateType = typeof similarInitialState;

export const slice = createSlice({
  name: 'similar',
  initialState: similarInitialState,
  reducers: {},
});

export const similarReducer = slice.reducer;
// export const { setThemeAC } = slice.actions;
