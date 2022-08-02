import type { RootState } from '../../../@store/configureStore';

export const similarMediaSelector = (state: RootState) => {
  return state.similar;
};
