import * as z from 'zod';
import {
  GenresSchema,
  ProductionCompaniesSchema,
  ProductionCountriesSchema,
  SpokenLanguagesSchema,
} from './z.details-shared';

export const DetailsMovieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  belongs_to_collection: z
    .object({
      id: z.number(),
      name: z.string(),
      poster_path: z.string(),
      backdrop_path: z.string(),
    })
    .nullable(),
  budget: z.number(),
  genres: GenresSchema,
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: ProductionCompaniesSchema,
  production_countries: ProductionCountriesSchema,
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: SpokenLanguagesSchema,
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type DetailsMovieType = z.infer<typeof DetailsMovieSchema>;
