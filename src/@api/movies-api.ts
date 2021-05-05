import { instance } from './api';

export const moviesApi = {
  getTrendingMovies(page: number) {
    return instance.get<any>(`/trending/all/day?page=${page}`);
  },
};
