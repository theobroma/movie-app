import * as z from 'zod';

export const MovieEntitySchema = z.object({
  adult: z.boolean(),
  // backdrop_path: z.string(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string(), // not exist in similar
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  // poster_path: z.string(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieEntityType = z.infer<typeof MovieEntitySchema>;

export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MoviesResponseType = z.infer<typeof MoviesResponseSchema>;

// SIMILAR
export const NoMediaTypeMovieEntitySchema = MovieEntitySchema.omit({
  media_type: true,
});

export type NoMediaTypeMovieEntityType = z.infer<
  typeof NoMediaTypeMovieEntitySchema
>;

export const SimilarMoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(NoMediaTypeMovieEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SimilarMoviesResponseType = z.infer<
  typeof SimilarMoviesResponseSchema
>;
