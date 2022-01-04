import * as z from 'zod';
import { MovieEntitySchema } from './z.movie';
import { TVEntitySchema } from './z.tv';

export const MediaAllResponseSchema = z.object({
  page: z.number(),
  results: z.array(z.union([MovieEntitySchema, TVEntitySchema])),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MediaAllResponseType = z.infer<typeof MediaAllResponseSchema>;
