import * as z from 'zod';

const CastPersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  // profile_path: z.string(),
  profile_path: z.string().nullable(),
  cast_id: z.optional(z.number()), // none in crew
  character: z.string(), // none in crew
  credit_id: z.string(),
  order: z.number(), // none in crew
});

export type CastPersonType = z.infer<typeof CastPersonSchema>;

const CrewPersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  // profile_path: z.string(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(), // none in cast
  job: z.string(), // none in cast
});

export type CrewPersonType = z.infer<typeof CrewPersonSchema>;

export const CreditsResponseSchema = z.object({
  cast: z.array(CastPersonSchema),
  crew: z.array(CrewPersonSchema),
  id: z.number(),
});

export type CreditsResponseType = z.infer<typeof CreditsResponseSchema>;
