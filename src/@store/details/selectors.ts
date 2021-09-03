import { RootState } from '..';

export const movieDetailsSelector = (state: RootState) => {
  return state.details;
};
