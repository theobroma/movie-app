export type MoviesResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type MovieType = {
  backdrop_path: string;
  first_air_date: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  media_type: string;
};
