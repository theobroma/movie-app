import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

// import { Trans } from 'react-i18next';
import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';

import { ROUTES } from '../../@types';

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: 'none',
    },
  }),
);

// type Props = {};

const CastMedia = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Cast
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <Link to={ROUTES.SINGLE_DETAILS_CAST} className={classes.link}>
          <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
            {/* More */}
            Оглянути всі &nbsp;
            <Trans i18nKey="Btn.More" />
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default CastMedia;
