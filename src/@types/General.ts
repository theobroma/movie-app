export type ForecastDayInfoType = {
  forecastday: Array<ForecastdayResponseType>;
};

export type ForecastdayResponseType = {
  date: string;
  day: DayResponseType;
  astro: AstroResponseType;
  hour: Array<HourResponseType>;
};

export type LocationResponseType = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type ConditionResponseType = {
  text: string;
  icon: string;
  code: number;
};

export type CurrentWeatherResponseType = {
  condition: ConditionResponseType;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  uv: number;
  gust_kph: number;
  last_updated: string;
  temp_c: number;
  is_day: number;
};

export type DayResponseType = {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: string;
  daily_will_it_snow: number;
  daily_chance_of_snow: string;
  uv: number;
  condition: ConditionResponseType;
};

export type AstroResponseType = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
};

export type HourResponseType = {
  time: string;
  temp_c: number;
  is_day: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  windchill_c: number;
  heatindex_c: number;
  dewpoint_c: number;
  will_it_rain: number;
  chance_of_rain: string;
  will_it_snow: number;
  chance_of_snow: string;
  gust_kph: number;
  condition: ConditionResponseType;
};
