import { createSelector } from '@reduxjs/toolkit';

import { MEDIA_TYPE } from '../../@types';
import type { RootState } from '../configureStore';

const visitedMediaSelector = (state: RootState) => {
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

export const visitedCountSelector = createSelector(
  visitedMediaSelector,
  (medias) => {
    return medias.length;
  },
);

// ====================favourites==============================

export const favouriteMediaSelector = (state: RootState) => {
  return state.user.favoriteMediaIds;
};

export const favouriteMovieIdsSelector = createSelector(
  favouriteMediaSelector,
  (medias) => {
    return medias
      .filter((m) => m.mediaType === MEDIA_TYPE.MOVIE)
      .map((m) => m.id);
  },
);

export const favouriteTVIdsSelector = createSelector(
  favouriteMediaSelector,
  (medias) => {
    return medias.filter((m) => m.mediaType === MEDIA_TYPE.TV).map((m) => m.id);
  },
);

export const favouriteCountSelector = createSelector(
  favouriteMediaSelector,
  (medias) => {
    return medias.length;
  },
);
