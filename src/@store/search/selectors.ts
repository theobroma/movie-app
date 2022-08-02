import type { RootState } from '../configureStore';

export const searchDataSelector = (state: RootState) => {
  return state.search.data;
};
