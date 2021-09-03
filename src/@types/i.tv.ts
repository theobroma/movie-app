import {
  GenresEntity,
  ProductionCompaniesEntity,
  ProductionCountriesEntity,
  SpokenLanguagesEntity,
} from './i.media-shared';

export interface ITVFull {
  backdrop_path: string;
  created_by?: null[] | null;
  episode_run_time?: number[] | null;
  first_air_date: string;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  in_production: boolean;
  languages?: string[] | null;
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: null;
  networks?: NetworksEntity[] | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country?: string[] | null;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  seasons?: SeasonsEntity[] | null;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface NetworksEntity {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface SeasonsEntity {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

// tv

// {
//   entities: {
//     '110642': {
//       backdrop_path: '/uPHXbrh9jlq2XgfjjTFlkJfgtOQ.jpg',
//       created_by: [],
//       episode_run_time: [
//         26
//       ],
//       first_air_date: '2021-07-08',
//       genres: [
//         {
//           id: 16,
//           name: 'Animation'
//         },
//         {
//           id: 10765,
//           name: 'Sci-Fi & Fantasy'
//         },
//         {
//           id: 10759,
//           name: 'Action & Adventure'
//         }
//       ],
//       homepage: 'https://www.netflix.com/title/80987064',
//       id: 110642,
//       in_production: false,
//       languages: [
//         'en'
//       ],
//       last_air_date: '2021-07-08',
//       last_episode_to_air: {
//         air_date: '2021-07-08',
//         episode_number: 4,
//         id: 3026810,
//         name: '',
//         overview: 'Secretary Wilson threatens Claire\'s life, demanding that she drop her investigation. Leon and Shen May rush to the vast subterranean bioweapons lab.',
//         production_code: '',
//         season_number: 1,
//         still_path: '/fgz4MMEs7hIF3foKZD9ZtE7svmz.jpg',
//         vote_average: 4,
//         vote_count: 1
//       },
//       name: 'RESIDENT EVIL: Infinite Darkness',
//       next_episode_to_air: null,
//       networks: [
//         {
//           name: 'Netflix',
//           id: 213,
//           logo_path: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
//           origin_country: ''
//         }
//       ],
//       number_of_episodes: 4,
//       number_of_seasons: 1,
//       origin_country: [
//         'US'
//       ],
//       original_language: 'en',
//       original_name: 'RESIDENT EVIL: Infinite Darkness',
//       overview: 'Years after the horrors Raccoon City, Leon and Claire find themselves consumed by a dark conspiracy when a viral attack ravages the White House.',
//       popularity: 221.735,
//       poster_path: '/wWwTjKER5a8LRUGHrw86VU0gUy1.jpg',
//       production_companies: [
//         {
//           id: 140891,
//           logo_path: null,
//           name: 'Quebico',
//           origin_country: 'JP'
//         },
//         {
//           id: 7164,
//           logo_path: '/vHsaqTkQ2ZTbdqrCA272YahoVlg.png',
//           name: 'TMS Entertainment',
//           origin_country: 'JP'
//         },
//         {
//           id: 7220,
//           logo_path: '/dD0x5awPmtx4sAr2pNvkmxkCODh.png',
//           name: 'CAPCOM',
//           origin_country: 'JP'
//         }
//       ],
//       production_countries: [
//         {
//           iso_3166_1: 'JP',
//           name: 'Japan'
//         }
//       ],
//       seasons: [
//         {
//           air_date: '2021-07-08',
//           episode_count: 4,
//           id: 164077,
//           name: 'Season 1',
//           overview: '',
//           poster_path: '/cDl03r3KB54sOsAeCCak5yQAPJa.jpg',
//           season_number: 1
//         }
//       ],
//       spoken_languages: [
//         {
//           english_name: 'English',
//           iso_639_1: 'en',
//           name: 'English'
//         }
//       ],
//       status: 'Ended',
//       tagline: '',
//       type: 'Miniseries',
//       vote_average: 8.2,
//       vote_count: 137
//     }
//   }
// }
