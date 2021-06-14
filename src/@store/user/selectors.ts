import { RootState } from '..';

export const visitedMediaIdsSelector = (state: RootState) => {
  return state.user.visitedMediaIds;
};

export const favouriteMoviesIdsSelector = (state: RootState) => {
  return state.user.favoriteMovieIds;
};
