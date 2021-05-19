import { MoviesResponseType } from '../@types';
import { instance } from './api';

export const moviesApi = {
  getTrendingAll(page: number) {
    return instance.get<MoviesResponseType>(`/trending/all/day?page=${page}`);
  },
  getMovieDetail(movieID: number) {
    return instance.get<any>(`/movie/${movieID}`);
  },
};
