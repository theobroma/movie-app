import type { RootState } from '../configureStore';

export const movieDetailsSelector = (state: RootState) => {
  return state.details;
};
