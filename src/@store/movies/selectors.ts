import { RootState } from '..';

export const moviesSelector = (state: RootState) => {
  return state.movies;
};

export const movieDetailsSelector = (state: RootState) => {
  return state.movies.movieDetails;
};
