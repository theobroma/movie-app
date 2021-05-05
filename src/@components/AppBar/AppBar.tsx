import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    }),
  };
});

export const SimpleAppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <Typography className={classes.title} variant="h6" noWrap>
              Weather App
            </Typography>
            <div className={classes.grow} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
