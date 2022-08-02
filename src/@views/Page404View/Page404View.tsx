import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';

import { useStyles } from './Page404View.styles';

const Page404View = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box component="div" my={3}>
              <Typography
                component="h1"
                variant="h1"
                className={classes.mainTitle}
              >
                404
              </Typography>
            </Box>
            <Box component="div" mb={3}>
              <Typography component="h2" variant="h4">
                Oops! This page does not exist
              </Typography>
            </Box>
            <Box component="div" mb={3}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
              >
                <MovieIcon className={classes.returnIcon} />
                Return to Home Page
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page404View;
