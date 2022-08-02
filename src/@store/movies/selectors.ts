import type { RootState } from '../configureStore';

// eslint-disable-next-line import/no-unused-modules
export const moviesSelector = (state: RootState) => {
  return state.movies;
};
