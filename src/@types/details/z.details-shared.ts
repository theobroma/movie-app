import * as z from 'zod';

// Genres
export const GenreSchema = z.object({ id: z.number(), name: z.string() });
export type GenreType = z.infer<typeof GenreSchema>;
export const GenresSchema = z.array(GenreSchema);
export type GenresType = z.infer<typeof GenresSchema>;
// Production Companies
export const ProductionCompaniesSchema = z.array(
  z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
  }),
);
export type ProductionCompaniesType = z.infer<typeof ProductionCompaniesSchema>;
// Production Countries
export const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});
export type ProductionCountryType = z.infer<typeof ProductionCountrySchema>;
export const ProductionCountriesSchema = z.array(ProductionCountrySchema);
// export type ProductionCountriesType = z.infer<typeof ProductionCountriesSchema>;
// Spoken Languages
export const SpokenLanguagesSchema = z.array(
  z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
  }),
);
export type SpokenLanguageType = z.infer<typeof SpokenLanguagesSchema>;
