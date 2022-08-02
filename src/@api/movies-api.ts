import type {
  CreditsResponseType,
  DetailsMediaAllType,
  MediaAllResponseType,
  MoviesResponseType,
  SimilarMoviesResponseType,
  TrailersResponseType,
  TVResponseType,
} from '../@types';

import { instance } from './api';

export const moviesApi = {
  // TRENDING
  getTrendingAll(page: number) {
    return instance.get<MediaAllResponseType>(
      `/trending/all/week?page=${page}`,
    );
  },
  getTrendingMovies(page: number) {
    return instance.get<MoviesResponseType>(
      `/trending/movie/week?page=${page}`,
    );
  },
  getTrendingTV(page: number) {
    return instance.get<TVResponseType>(`/trending/tv/week?page=${page}`);
  },
  // DETAILS
  getMediaDetails(mediaId: string, mediaType: string) {
    return instance.get<DetailsMediaAllType>(`/${mediaType}/${mediaId}`);
  },
  getFullMovieDetails(
    movieID: string | undefined,
    mediaType: string | undefined,
  ) {
    return instance.get<any>(
      `/${mediaType}/${movieID}&append_to_response=videos,credits`,
    );
  },
  getTrailers(mediaId: string, mediaType: string) {
    return instance.get<TrailersResponseType>(`${mediaType}/${mediaId}/videos`);
  },
  getCredits(mediaId: string, mediaType: string) {
    return instance.get<CreditsResponseType>(`${mediaType}/${mediaId}/credits`);
  },
  getSimilar(id: string | undefined, mediaType: string | undefined) {
    return instance.get<SimilarMoviesResponseType>(
      `${mediaType}/${id}/similar`,
    );
  },
  getRecommended(id: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`${mediaType}/${id}/recommendations`);
  },
  // SEARCH
  getSearch(
    searchText: string | undefined,
    mediaType: string | undefined = 'movie',
    page = 1,
  ) {
    return instance.get<SimilarMoviesResponseType>(
      `/search/${mediaType}?query=${searchText}&page=${page}`,
    );
  },
};
