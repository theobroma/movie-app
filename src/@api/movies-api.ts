import { MoviesResponseType } from '../@types';
import { instance } from './api';

export const moviesApi = {
  getTrendingMovies(page: number) {
    return instance.get<MoviesResponseType>(`/trending/all/day?page=${page}`);
  },
};
