import { RootState } from '..';

export const searchDataSelector = (state: RootState) => {
  return state.search.data;
};
