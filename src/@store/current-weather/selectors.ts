import { RootState } from '..';

export const currentWeatherSelector = (state: RootState) => {
  return state.currentWeather;
};
