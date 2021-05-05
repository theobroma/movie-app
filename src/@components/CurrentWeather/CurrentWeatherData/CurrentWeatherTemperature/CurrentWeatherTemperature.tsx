import React from 'react';
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { ConditionResponseType } from '../../../../@types';

const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      condition: {
        position: 'absolute',
        // filter: `brightness(0)`,
        width: '150px',
        opacity: 0.15,
      },
      conditionText: {
        fontSize: 30,
        fontWeight: 300,
      },
      temperatureWrap: {
        position: 'relative',
      },
      temperature: {
        lineHeight: 1,
        fontSize: 140,
        fontWeight: 700,
        [theme.breakpoints.down('xs')]: {
          fontSize: 75,
        },
      },
    }),
  };
});

const CurrentWeatherTemperature: React.FC<Props> = ({ temp, condition }) => {
  const classes = useStyles();

  return (
    <Box className={classes.temperatureWrap}>
      <img
        src={condition?.icon}
        className={classes.condition}
        width="150"
        alt="condition"
      />
      <Box pt={5}>
        <Typography
          className={classes.temperature}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {temp}&#176;C
        </Typography>
        <Typography
          className={classes.conditionText}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {condition?.text}
        </Typography>
      </Box>
    </Box>
  );
};

type Props = {
  temp: number;
  condition: ConditionResponseType;
};

export default CurrentWeatherTemperature;
