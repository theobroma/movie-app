import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

export const CurrentWeather: React.FC = () => {
  const dispatch = useDispatch();
  const { lon, lat, location, currentWeather } = useSelector(
    currentWeatherSelector,
  );

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getCurrentWeatherTC({ lat, lon }));
    }
  }, [lat, lon, dispatch]);

  return (
    <Box p={3}>
      <Location location={location} />
      <CurrentWeatherData currentWeather={currentWeather} />
    </Box>
  );
};
