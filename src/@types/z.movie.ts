import * as z from 'zod';

const MovieEntitySchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieEntityType = z.infer<typeof MovieEntitySchema>;

// TODO: mb generic
export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MoviesResponseType = z.infer<typeof MoviesResponseSchema>;
