import {
  GenresEntity,
  ProductionCompaniesEntity,
  ProductionCountriesEntity,
  SpokenLanguagesEntity,
} from './i.media-shared';

export interface IMovieFull {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

// movie
// '1091': {
//   adult: false,
//   backdrop_path: '/r9leYNa8nTRCceZrZhP1DXkgKVb.jpg',
//   belongs_to_collection: {
//     id: 479888,
//     name: 'The Thing Collection',
//     poster_path: '/vnfxRM89Qav5d0fMluIwx1hKadc.jpg',
//     backdrop_path: '/lUPruOqjDhZrCKz9Ze2tCufPxHR.jpg'
//   },
//   budget: 15000000,
//   genres: [
//     {
//       id: 27,
//       name: 'Horror'
//     },
//     {
//       id: 9648,
//       name: 'Mystery'
//     },
//     {
//       id: 878,
//       name: 'Science Fiction'
//     }
//   ],
//   homepage: 'http://www.theofficialjohncarpenter.com/the-thing/',
//   id: 1091,
//   imdb_id: 'tt0084787',
//   original_language: 'en',
//   original_title: 'The Thing',
//   overview: 'Members of an American scientific research outpost in Antarctica find themselves battling a parasitic alien organism capable of perfectly imitating its victims. They soon discover that this task will be harder than they thought, as they don\'t know which members of the team have already been assimilated and their paranoia threatens to tear them apart.',
//   popularity: 33.076,
//   poster_path: '/tzGY49kseSE9QAKk47uuDGwnSCu.jpg',
//   production_companies: [
//     {
//       id: 33,
//       logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
//       name: 'Universal Pictures',
//       origin_country: 'US'
//     },
//     {
//       id: 662,
//       logo_path: null,
//       name: 'Turman-Foster Company',
//       origin_country: ''
//     }
//   ],
//   production_countries: [
//     {
//       iso_3166_1: 'US',
//       name: 'United States of America'
//     }
//   ],
//   release_date: '1982-06-25',
//   revenue: 19629760,
//   runtime: 109,
//   spoken_languages: [
//     {
//       english_name: 'English',
//       iso_639_1: 'en',
//       name: 'English'
//     },
//     {
//       english_name: 'Norwegian',
//       iso_639_1: 'no',
//       name: 'Norsk'
//     }
//   ],
//   status: 'Released',
//   tagline: 'Man is The Warmest Place to Hide.',
//   title: 'The Thing',
//   video: false,
//   vote_average: 8,
//   vote_count: 4655
// },
