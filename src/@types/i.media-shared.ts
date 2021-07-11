// shared for both: movie and tv
export interface GenresEntity {
  id: number;
  name: string;
}

export interface ProductionCompaniesEntity {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
