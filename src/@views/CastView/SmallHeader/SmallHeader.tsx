import React from 'react';
import dayjs from 'dayjs';
import { Link as RouterLink, useParams } from 'react-router-dom';

import { Box, Container, Link, Typography } from '@material-ui/core';

import { useStyles } from './SmallHeader.styles';

const poster_base_url =
  'https://image.tmdb.org/t/p/original/t/p/w58_and_h87_face';

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

type Props = {
  data: any;
};

const SmallHeader = ({
  data: {
    // id,
    title = '',
    name = '',
    original_title = '',
    original_name = '',
    // original_language,
    poster_path,
    release_date = '',
    first_air_date = '',
    // vote_average = 0,
    // media_type,
  } = {},
}: Props) => {
  const classes = useStyles();
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaReleaseDate = dayjs(release_date || first_air_date).format('YYYY');
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box py={4}>
          <section className={classes.media}>
            {/* poster */}
            <Link
              component={RouterLink}
              to={`/details/${mediaType}/${mediaId}`}
              style={{ textDecoration: 'none !important' }}
            >
              <img
                className={classes.poster}
                src={`${poster_base_url}${poster_path}`}
                //   srcSet="/t/p/w58_and_h87_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 1x, /t/p/w116_and_h174_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 2x"
                alt={original_title}
                width="58"
                height="87"
              />
            </Link>
            <div className={classes.mediaBody}>
              {/* Title */}
              <Typography variant="h4" component="h2">
                <Link
                  className={classes.titleMedia}
                  component={RouterLink}
                  to={`/details/${mediaType}/${mediaId}`}
                >
                  {mediaTitle}&nbsp;
                </Link>
                <span className={classes.titleDate}>({mediaReleaseDate})</span>
              </Typography>
              {/* Link */}
              <Link
                component={RouterLink}
                to={`/details/${mediaType}/${mediaId}`}
                className={classes.link}
              >
                ← На головну
              </Link>
            </div>
          </section>
        </Box>
      </Container>
    </div>
  );
};

export default SmallHeader;
