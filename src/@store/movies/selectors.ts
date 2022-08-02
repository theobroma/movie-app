import type { RootState } from '../configureStore';

export const moviesSelector = (state: RootState) => {
  return state.movies;
};
