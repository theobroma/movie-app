import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';
import { nanoid } from '@reduxjs/toolkit';

const useStyles = makeStyles(() => ({
  skeleton: {
    background: 'rgb(181, 181, 181)',
  },
  icon: {
    color: 'rgb(181, 181, 181)',
  },
}));

const MovieInfoSkeleton = () => {
  const classes = useStyles();

  const subtitle = (width: number) => (
    <Skeleton
      variant="text"
      width={width}
      height={28}
      className={classes.skeleton}
    />
  );

  const text = (rows: number) =>
    Array.from(new Array(rows)).map(() => (
      <Skeleton
        variant="text"
        key={nanoid()}
        width={`${100 - Math.random() * 8}%`}
        height={20}
        className={classes.skeleton}
      />
    ));

  return (
    <Grid container spacing={7}>
      <Grid item md={3}>
        <Skeleton
          variant="rect"
          height={432}
          style={{ borderRadius: 10 }}
          width="100%"
          className={classes.skeleton}
        />
      </Grid>
      <Grid item md={8} style={{ color: 'white' }}>
        <Skeleton
          variant="text"
          width={100}
          height={20}
          className={classes.skeleton}
        />
        <Skeleton
          variant="text"
          width={300}
          height={34}
          className={classes.skeleton}
        />
        <div>
          <Rating value={0} classes={{ iconEmpty: classes.icon }} readOnly />
        </div>
        {subtitle(50)}
        {text(4)}
        <br />
        {subtitle(70)}
        {text(3)}
        <br />
        {subtitle(50)}
        {text(2)}
      </Grid>
    </Grid>
  );
};

export default MovieInfoSkeleton;
