import { RootState } from '..';

export const entitiesSelector = (state: RootState) => {
  return state.entities;
};
