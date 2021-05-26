import { MoviesResponseType } from '../@types';
import { instance } from './api';

export const moviesApi = {
  getTrendingAll(page: number) {
    return instance.get<MoviesResponseType>(`/trending/all/day?page=${page}`);
  },
  getMovieDetails(movieID: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`/${mediaType}/${movieID}`);
  },
  getFullMovieDetails(
    movieID: string | undefined,
    mediaType: string | undefined,
  ) {
    return instance.get<any>(
      `/${mediaType}/${movieID}&append_to_response=videos,credits`,
    );
  },
  getTrailers(id: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`${mediaType}/${id}/videos`);
  },
  getCredits(id: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`${mediaType}/${id}/credits`);
  },

  getSearch(
    searchText: string | undefined,
    mediaType: string | undefined = 'movie',
    page = 1,
  ) {
    return instance.get<any>(
      `/search/${mediaType}?query=${searchText}&page=${page}`,
    );
  },
};
