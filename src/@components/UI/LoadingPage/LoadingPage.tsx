import React from 'react';

import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default LoadingPage;
