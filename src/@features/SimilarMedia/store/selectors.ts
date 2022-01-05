import { RootState } from '../../../@store';

export const similarMediaSelector = (state: RootState) => {
  return state.similar;
};
