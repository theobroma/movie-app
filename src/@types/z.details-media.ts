import * as z from 'zod';
import { DetailsMovieSchema } from './z.details-movie';
import { DetailsTVSchema } from './z.details-tv';

// MIXED Movies and TV responses
export const DetailsMediaAllSchema = z.union([
  DetailsMovieSchema,
  DetailsTVSchema,
]);

export type DetailsMediaAllType = z.infer<typeof DetailsMediaAllSchema>;
