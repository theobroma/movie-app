import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../../@api/api';
import { TVResponseType } from '../../@types';

export const trendingTVapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    listPosts: builder.query<TVResponseType, number | void>({
      query: (page = 1) =>
        `/trending/tv/week?page=${page}&api_key=${API_KEY}&language=ru`,
    }),
  }),
});

export const { useListPostsQuery } = trendingTVapi;
