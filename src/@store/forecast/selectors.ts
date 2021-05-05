import { RootState } from '..';

export const forecastdaySelector = (state: RootState) => {
  return state.forecast.forecastday;
};
