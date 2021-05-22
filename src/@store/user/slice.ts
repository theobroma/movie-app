import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  visitedMovies: [] as Array<number>,
};

export type UserInitialStateType = typeof userInitialState;

export const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setMovieFavoriteAC(state, action) {
      state.visitedMovies.push(action.payload);
    },
    // setLoadingAC(state, action) {
    //   state.isLoading = action.payload;
    // },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(getTrendingAllTC.fulfilled, (state, action) => {
  //       if (action.payload) {
  //         state.data = action.payload.data;
  //       }
  //     });
  //   },
});

export const userReducer = slice.reducer;
export const { setMovieFavoriteAC } = slice.actions;
