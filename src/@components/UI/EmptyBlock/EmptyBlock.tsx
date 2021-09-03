import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: 300,
    background: '#f3f3f3',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.25)',
  },
}));

const EmptyBlock: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body1">{children}</Typography>
    </div>
  );
};

export default EmptyBlock;
