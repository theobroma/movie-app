import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import type { CreditsResponseType } from '../../../@types';

import { useStyles } from './MovieInfo.styles';

type Props = {
  credits: CreditsResponseType;
};

const CrewList = ({ credits }: Props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} component="ul" className={classes.crewList}>
      {credits?.crew?.slice(0, 4).map((person) => (
        <Grid
          item
          md={3}
          sm={6}
          component="li"
          key={nanoid()}
          style={{ paddingRight: 16 }}
        >
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {person.name}
          </Typography>
          <Typography variant="body2" style={{ fontSize: '0.9em' }}>
            {person.department}, {person.job}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CrewList;
