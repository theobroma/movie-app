import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL } from '../../@api/api';
import type { MoviesResponseType, TVResponseType } from '../../@types';

export const trendingTVapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    trendingTV: builder.query<
      TVResponseType,
      { page: number | void; isoCode: string }
    >({
      query: ({ page, isoCode }) =>
        `/trending/tv/week?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
    }),
    trendingMovies: builder.query<
      MoviesResponseType,
      { page: number | void; isoCode: string }
    >({
      query: ({ page, isoCode }) =>
        `/trending/movie/week?page=${page}&api_key=${API_KEY}&language=${isoCode}`,
    }),
  }),
});

export const { useTrendingTVQuery, useTrendingMoviesQuery } = trendingTVapi;
