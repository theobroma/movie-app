import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacon,
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { CurrentWeatherResponseType } from '../../../@types';
import CurrentWeatherTemperature from './CurrentWeatherTemperature';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      title: {
        paddingLeft: 10,
        paddingRight: 7,
      },
    }),
  };
});

export const CurrentWeatherData: React.FC<Props> = ({
  currentWeather: {
    temp_c,
    condition,
    last_updated,
    humidity,
    wind_kph,
    wind_dir,
    gust_kph,
  },
}) => {
  const classes = useStyles();
  const updateDate = new Date(last_updated);
  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  const last_updated_weekday = updateDate.toLocaleString(
    'en-US',
    currentWeekday,
  );
  const last_updated_date = updateDate.toLocaleString('en-US', currentDate);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CurrentWeatherTemperature temp={temp_c} condition={condition} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            {/* 1 */}
            <Box my={2}>
              <Typography color="textSecondary" display="inline">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                display="inline"
              >
                Today:
              </Typography>
              <Typography variant="subtitle1" align="center" display="inline">
                {last_updated_weekday} {last_updated_date}
              </Typography>
            </Box>
            {/* 2 */}
            <Box my={2}>
              <Typography color="textSecondary" display="inline">
                <FontAwesomeIcon icon={faTemperatureHigh} />
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                display="inline"
              >
                Feels Like:
              </Typography>
              <Typography variant="subtitle1" align="center" display="inline">
                {temp_c}&#176;C
              </Typography>
            </Box>
            {/* 3 */}
            <Box my={2}>
              <Typography color="textSecondary" display="inline">
                <FontAwesomeIcon icon={faWater} />
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                display="inline"
              >
                Humidity:
              </Typography>
              <Typography variant="subtitle1" align="center" display="inline">
                {humidity} %
              </Typography>
            </Box>
            {/* 4 */}
            <Box my={2}>
              <Typography color="textSecondary" display="inline">
                <FontAwesomeIcon icon={faWind} />
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                display="inline"
              >
                Wind:
              </Typography>
              <Typography variant="subtitle1" align="center" display="inline">
                {wind_kph} km/h ({wind_dir})
              </Typography>
            </Box>
            {/* 5 */}
            <Box my={2}>
              <Typography color="textSecondary" display="inline">
                <FontAwesomeIcon icon={faBacon} />
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                display="inline"
              >
                Gust:
              </Typography>
              <Typography variant="subtitle1" align="center" display="inline">
                {gust_kph}
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
      <div />
    </div>
  );
};

type Props = {
  currentWeather: CurrentWeatherResponseType;
};
