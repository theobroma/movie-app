import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
    }),
  };
});

const Carousel: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <span>carousel</span>
    </div>
  );
};

export default Carousel;
