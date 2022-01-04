import * as z from 'zod';

const MovieEntitySchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  vote_count: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  poster_path: z.string(),
  video: z.boolean(),
  title: z.string(),
  vote_average: z.number(),
  id: z.number(),
  overview: z.string(),
  release_date: z.string(),
  popularity: z.number(),
  media_type: z.string(),
});
export type MovieEntityType = z.infer<typeof MovieEntitySchema>;

export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MoviesResponseType = z.infer<typeof MoviesResponseSchema>;
