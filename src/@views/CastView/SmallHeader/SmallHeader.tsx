import React from 'react';
import dayjs from 'dayjs';
import { Link as RouterLink, useParams } from 'react-router-dom';

import {
  Box,
  Container,
  createStyles,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';

const poster_base_url =
  'https://image.tmdb.org/t/p/original/t/p/w58_and_h87_face';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      root: {
        background: 'rgb(56 56 56)',
      },
      titleMedia: {
        fontWeight: 700,
        color: '#fff',
      },
      titleDate: {
        opacity: 0.8,
        fontWeight: 400,
      },
      link: {
        color: '#fff',
        // fontFamily: 'Source Sans Pro', Arial, sans-serif,
        fontSize: '1.1em',
        fontWeight: 600,
        margin: 0,
        opacity: 0.6,
        '&.hover': {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    }),
  };
});

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
          <section className="header small">
            <span className="flex poster">
              <a href="/tv/92783-she-hulk-attorney-at-law?language=ru">
                <img
                  className="poster"
                  src={`${poster_base_url}${poster_path}`}
                  //   srcSet="/t/p/w58_and_h87_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 1x, /t/p/w116_and_h174_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 2x"
                  alt={original_title}
                  width="58"
                  height="87"
                />
              </a>
              {/* Title */}
              <span>
                <div className="title ott_false" dir="auto">
                  {/* <h2 className="25">
                    <a href="/tv/92783-she-hulk-attorney-at-law?language=ru">
                      {mediaTitle}
                    </a>
                    <span className="tag release_date">(2022)</span>
                  </h2> */}

                  <Typography
                    variant="h4"
                    component="h1"
                    className={classes.titleMedia}
                  >
                    {mediaTitle}{' '}
                    <span className={classes.titleDate}>
                      {mediaReleaseDate}
                    </span>
                  </Typography>
                </div>
                {/* Link */}
                {/* <h3>
                  <a
                    className="keyboard_s parent"
                    href="/tv/92783-she-hulk-attorney-at-law?language=ru"
                  >
                    ← На головну
                  </a>
                </h3> */}
                {/*  */}
                <Link
                  component={RouterLink}
                  to={`/details/${mediaType}/${mediaId}`}
                  className={classes.link}
                >
                  ← На головну
                </Link>
              </span>
            </span>
          </section>
        </Box>
      </Container>
    </div>
  );
};

export default SmallHeader;
