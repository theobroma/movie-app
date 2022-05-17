import * as z from 'zod';

export const GenresSchema = z.array(
  z.object({ id: z.number(), name: z.string() }),
);

export const ProductionCompaniesSchema = z.array(
  z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
  }),
);

export const ProductionCountriesSchema = z.array(
  z.object({ iso_3166_1: z.string(), name: z.string() }),
);

export const SpokenLanguagesSchema = z.array(
  z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
  }),
);
