import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Grid, Typography, Box } from '@material-ui/core';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { forecastdaySelector } from '../../@store/forecast/selectors';
import { getForecastTC } from '../../@store/forecast/slice';
import ForecastDay from './ForecastDay/ForecastDay';

const Forecast: React.FC = () => {
  const dispatch = useDispatch();
  const { lon, lat } = useSelector(currentWeatherSelector);
  const forecastInfo = useSelector(forecastdaySelector);
  const days = 3;

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getForecastTC({ days, lat, lon }));
    }
  }, [lat, lon, days, dispatch]);

  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  return (
    <Box p={3}>
      <Box mb={1}>
        <Typography variant="h6" noWrap>
          Forecast
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={1}>
          {forecastInfo.map((d) => {
            const adaptedDate = new Date(d.date);
            return (
              <Grid item xs={12} md={4} key={nanoid(8)}>
                <ForecastDay
                  weekDay={adaptedDate.toLocaleString('en-US', currentWeekday)}
                  date={adaptedDate.toLocaleString('en-US', currentDate)}
                  sunrise={d.astro.sunrise}
                  sunset={d.astro.sunset}
                  icon={d.day.condition.icon}
                  condition_text={d.day.condition.text}
                  min_temp={d.day.mintemp_c}
                  max_temp={d.day.maxtemp_c}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Forecast;
