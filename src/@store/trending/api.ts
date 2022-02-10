import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../../@api/api';
import { MoviesResponseType, TVResponseType } from '../../@types';

export const trendingTVapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    trendingTV: builder.query<TVResponseType, number | void>({
      query: (page = 1) => `/trending/tv/week?page=${page}&api_key=${API_KEY}`,
    }),
    trendingMovies: builder.query<MoviesResponseType, number | void>({
      query: (page = 1) =>
        `/trending/movie/week?page=${page}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingTVapi;
