import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { MEDIA_TYPE } from '../../@types';

export const visitedMediaSelector = (state: RootState) => {
  return state.user.visitedMediaIds;
};

export const visitedMovieIdsSelector = createSelector(
  visitedMediaSelector,
  (medias) => {
    return medias
      .filter((m) => m.mediaType === MEDIA_TYPE.MOVIE)
      .map((m) => m.id);
  },
);

export const visitedTVIdsSelector = createSelector(
  visitedMediaSelector,
  (medias) => {
    return medias.filter((m) => m.mediaType === MEDIA_TYPE.TV).map((m) => m.id);
  },
);

export const favouriteMoviesIdsSelector = (state: RootState) => {
  return state.user.favoriteMovieIds;
};
