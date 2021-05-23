import { RootState } from '..';

export const visitedMoviesSelector = (state: RootState) => {
  return state.user.visitedMovieIds;
};

export const favouriteMoviesSelector = (state: RootState) => {
  return state.user.visitedMovieIds;
};
