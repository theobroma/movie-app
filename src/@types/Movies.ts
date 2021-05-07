export type MoviesResponseType = {
  page: number;
  results: MoviesResultsType[];
  total_pages: number;
  total_results: number;
};

export type MoviesResultsType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  media_type: string;
};
