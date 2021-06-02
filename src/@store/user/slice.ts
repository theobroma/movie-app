import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  visitedMovieIds: [] as Array<string>,
  favoriteMovieIds: ['337404', '602734', '691179'] as Array<string>,
};

export type UserInitialStateType = typeof userInitialState;

export const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setMovieVisitedAC(state, action) {
      state.visitedMovieIds.push(action.payload);
    },
    setMovieFavoriteAC(state, action) {
      state.favoriteMovieIds.push(action.payload);
    },
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
export const { setMovieVisitedAC, setMovieFavoriteAC } = slice.actions;
