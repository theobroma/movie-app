// MIXED Movies and TV responses
import * as z from 'zod';

// TRENDING
import { MovieEntityOmitMediaTypeSchema, MovieEntitySchema } from './z.movie';
import { TVEntityOmitMediaTypeSchema, TVEntitySchema } from './z.tv';

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
    z.union([MovieEntityOmitMediaTypeSchema, TVEntityOmitMediaTypeSchema]),
  ),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SimilarMediaAllResponseType = z.infer<
  typeof SimilarMediaAllResponseSchema
>;
