import { RootState } from '..';

export const entitiesSelector = (state: RootState) => {
  return state.entities;
};

export const entitiesMoviesSelector = (state: RootState) => {
  return state.entities.movies;
};

export const entitiesTVSelector = (state: RootState) => {
  return state.entities.tv;
};
