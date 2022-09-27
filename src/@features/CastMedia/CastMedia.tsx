import React from 'react';
// import { Trans } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

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

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: 'none',
    },
  }),
);

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

// type Props = {};

const CastMedia = () => {
  const classes = useStyles();
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Cast
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <Link
          to={`/details/${mediaType}/${mediaId}/cast`}
          className={classes.link}
        >
          <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
            {/* More */}
            Оглянути увест склад &nbsp;
            {/* <Trans i18nKey="Btn.More" /> */}
          </Button>
        </Link>
        {/* tmp */}
        <Link
          to={`/details/${mediaType}/${mediaId}/videos`}
          className={classes.link}
        >
          <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
            {/* More */}
            Оглянути всі відео &nbsp;
            {/* <Trans i18nKey="Btn.More" /> */}
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default CastMedia;
