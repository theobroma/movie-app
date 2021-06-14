import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  visitedMediaIds: [] as Array<{ id: string; mediaType: string }>,
  favoriteMovieIds: ['337404', '49849', '280'] as Array<string>,
};

export type UserInitialStateType = typeof userInitialState;

export const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    toggleMovieFavoriteAC(state, action) {
      const id = action.payload;
      const index = state.favoriteMovieIds.indexOf(id);
      const isFavorite = index !== -1;
      if (isFavorite) {
        state.favoriteMovieIds.splice(index, 1);
      } else {
        state.favoriteMovieIds.push(id);
      }
    },
    setMovieVisitedAC(state, action) {
      const { id, mediaType } = action.payload;
      // const index = state.visitedMovieIds.indexOf(id);
      const index = state.visitedMediaIds.findIndex(
        (element) => element.id === id && element.mediaType === mediaType,
      );

      const isVisited = index !== -1;
      // remove if exist and add again in the begin
      if (isVisited) {
        state.visitedMediaIds.splice(index, 1);
      }
      state.visitedMediaIds.push(action.payload);
    },
    clearVisitedAC(state) {
      state.visitedMediaIds = [];
    },
  },
});

export const userReducer = slice.reducer;
export const { setMovieVisitedAC, toggleMovieFavoriteAC, clearVisitedAC } =
  slice.actions;
