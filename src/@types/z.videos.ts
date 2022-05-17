import * as z from 'zod';

const TrailerSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export type TrailerType = z.infer<typeof TrailerSchema>;

export const TrailersResponseSchema = z.object({
  id: z.number(),
  results: z.array(TrailerSchema),
});

export type TrailersResponseType = z.infer<typeof TrailersResponseSchema>;
