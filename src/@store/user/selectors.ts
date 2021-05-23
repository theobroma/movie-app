import { RootState } from '..';

export const visitedMoviesSelector = (state: RootState) => {
  return state.user.visitedMovies;
};
