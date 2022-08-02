import type { RootState } from '../configureStore';

export const trendingSelector = (state: RootState) => {
  return state.trending;
};
