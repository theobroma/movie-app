import {
  LocationResponseType,
  CurrentWeatherResponseType,
  AstroResponseType,
  DayResponseType,
  HourResponseType,
} from '../@types';
import { API_KEY, instance } from './api';

export const forecastAPI = {
  dailyWeather(days: number, lat: number, lon: number) {
    return instance.get<ForecastType>(
      `/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=${days}`,
    );
  },
};

export type ForecastType = {
  location: LocationResponseType;
  current: CurrentWeatherResponseType;
  forecast: ForecastDayInfoType;
};

export type ForecastDayInfoType = {
  forecastday: Array<ForecastdayResponseType>;
};

export type ForecastdayResponseType = {
  date: string;
  day: DayResponseType;
  astro: AstroResponseType;
  hour: Array<HourResponseType>;
};
