import { RootState } from '..';

export const trendingSelector = (state: RootState) => {
  return state.trending;
};
