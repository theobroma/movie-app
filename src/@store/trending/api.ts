import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../../@api/api';

// interface Post {
//   id: number;
//   name: string;
// }
// interface ListResponse<T> {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: T[];
// }

export const trendingTVapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    listPosts: builder.query<any, number | void>({
      query: (page = 1) => `/trending/tv/week?page=${page}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useListPostsQuery } = trendingTVapi;
