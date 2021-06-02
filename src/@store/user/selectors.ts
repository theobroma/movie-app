import { RootState } from '..';

export const visitedMoviesIdsSelector = (state: RootState) => {
  return state.user.visitedMovieIds;
};

export const favouriteMoviesIdsSelector = (state: RootState) => {
  return state.user.favoriteMovieIds;
};
