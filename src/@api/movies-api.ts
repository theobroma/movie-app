import { MoviesResponseType } from '../@types';
import { instance } from './api';

export const moviesApi = {
  getTrendingAll(page: number) {
    return instance.get<MoviesResponseType>(`/trending/all/day?page=${page}`);
  },
  getMovieDetail(movieID: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`/${mediaType}/${movieID}`);
  },
  getTrailers(id: string | undefined, mediaType: string | undefined) {
    return instance.get<any>(`${mediaType}/${id}/videos`);
  },
};
