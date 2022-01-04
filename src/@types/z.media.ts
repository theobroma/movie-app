// MIXED Movies and TV responses
import * as z from 'zod';
import { MovieEntitySchema, NoMediaTypeMovieEntitySchema } from './z.movie';
import { NoMediaTypeTVEntitySchema, TVEntitySchema } from './z.tv';

export const MediaAllResponseSchema = z.object({
  page: z.number(),
  results: z.array(z.union([MovieEntitySchema, TVEntitySchema])),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MediaAllResponseType = z.infer<typeof MediaAllResponseSchema>;

// SIMILAR
export const SimilarMediaAllResponseSchema = z.object({
  page: z.number(),
  results: z.array(
    z.union([NoMediaTypeMovieEntitySchema, NoMediaTypeTVEntitySchema]),
  ),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SimilarMediaAllResponseType = z.infer<
  typeof SimilarMediaAllResponseSchema
>;
