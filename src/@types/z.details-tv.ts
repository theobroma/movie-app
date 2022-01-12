import * as z from 'zod';
import {
  GenresSchema,
  ProductionCompaniesSchema,
  ProductionCountriesSchema,
  SpokenLanguagesSchema,
} from './z.details-shared';

export const DetailsTVSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  created_by: z.array(
    z.object({
      id: z.number(),
      credit_id: z.string(),
      name: z.string(),
      gender: z.number(),
      profile_path: z.string().nullable(),
    }),
  ),
  episode_run_time: z.array(z.number()),
  first_air_date: z.string(),
  genres: GenresSchema,
  homepage: z.string(),
  id: z.number(),
  in_production: z.boolean(),
  languages: z.array(z.string()),
  last_air_date: z.string(),
  last_episode_to_air: z.object({
    air_date: z.string(),
    episode_number: z.number(),
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    production_code: z.string(),
    season_number: z.number(),
    still_path: z.string().nullable(),
    vote_average: z.number(),
    vote_count: z.number(),
  }),
  name: z.string(),
  next_episode_to_air: z
    .object({
      air_date: z.string(),
      episode_number: z.number(),
      id: z.number(),
      name: z.string(),
      overview: z.string(),
      production_code: z.string(),
      season_number: z.number(),
      still_path: z.null().nullable(),
      vote_average: z.number(),
      vote_count: z.number(),
    })
    .nullable(),
  networks: z.array(
    z.object({
      name: z.string(),
      id: z.number(),
      logo_path: z.string(),
      origin_country: z.string(),
    }),
  ),
  number_of_episodes: z.number(),
  number_of_seasons: z.number(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: ProductionCompaniesSchema,
  production_countries: ProductionCountriesSchema,
  seasons: z.array(
    z.object({
      air_date: z.string(),
      episode_count: z.number(),
      id: z.number(),
      name: z.string(),
      overview: z.string(),
      poster_path: z.string(),
      season_number: z.number(),
    }),
  ),
  spoken_languages: SpokenLanguagesSchema,
  status: z.string(),
  tagline: z.string(),
  type: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type DetailsTVType = z.infer<typeof DetailsTVSchema>;
