import { RootState } from '..';

export const moviesSelector = (state: RootState) => {
  return state.movies;
};
