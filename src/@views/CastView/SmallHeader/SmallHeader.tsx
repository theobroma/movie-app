import React from 'react';
import dayjs from 'dayjs';

import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      root: {
        background: 'rgb(56 56 56)',
      },
      titleDate: {
        opacity: 0.8,
        fontWeight: 400,
      },
    }),
  };
});

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
    // poster_path,
    release_date = '',
    first_air_date = '',
    // vote_average = 0,
    // media_type,
  } = {},
}: Props) => {
  const classes = useStyles();
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
                  src="/t/p/w58_and_h87_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg"
                  srcSet="/t/p/w58_and_h87_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 1x, /t/p/w116_and_h174_face/cvesYM2Cp8y0p2IlFnEnGVxb9f1.jpg 2x"
                  alt="She-Hulk: Attorney at Law"
                />
              </a>

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
                    style={{ fontWeight: 'bold' }}
                    component="h1"
                  >
                    {mediaTitle}{' '}
                    <span className={classes.titleDate}>
                      {mediaReleaseDate}
                    </span>
                  </Typography>
                </div>

                <h3>
                  <a
                    className="keyboard_s parent"
                    href="/tv/92783-she-hulk-attorney-at-law?language=ru"
                  >
                    ← На головну
                  </a>
                </h3>
              </span>
            </span>
          </section>
        </Box>
      </Container>
    </div>
  );
};

export default SmallHeader;
