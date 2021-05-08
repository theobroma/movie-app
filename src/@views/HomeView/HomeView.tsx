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

const HomeView: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <span>Home</span>
    </div>
  );
};

export default HomeView;
