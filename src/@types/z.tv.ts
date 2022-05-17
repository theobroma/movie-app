import * as z from 'zod';

export const TVEntitySchema = z.object({
  // backdrop_path: z.string(),
  backdrop_path: z.string().nullable(),
  first_air_date: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string(), // not exist in similar
  name: z.string(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type TVEntityType = z.infer<typeof TVEntitySchema>;

export const TVResponseSchema = z.object({
  page: z.number(),
  results: z.array(TVEntitySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TVResponseType = z.infer<typeof TVResponseSchema>;

// SIMILAR
export const TVEntityOmitMediaTypeSchema = TVEntitySchema.omit({
  media_type: true,
});

export type TVEntityOmitMediaType = z.infer<typeof TVEntityOmitMediaTypeSchema>;

export const SimilarTVResponseSchema = z.object({
  page: z.number(),
  results: z.array(TVEntityOmitMediaTypeSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SimilarTVResponseType = z.infer<typeof SimilarTVResponseSchema>;
