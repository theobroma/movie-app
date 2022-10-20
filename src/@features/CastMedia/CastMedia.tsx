// https://stackoverflow.com/questions/63216730/can-you-use-material-ui-link-with-react-router-dom-link
import React from 'react';
// import { Trans } from 'react-i18next';
import { Link as RouterLink, useParams } from 'react-router-dom';

// import { Trans } from 'react-i18next';
import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MUILink from '@material-ui/core/Link';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      display: 'flex',
      alignItems: 'center',
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
        <MUILink
          component={RouterLink}
          to={`/details/${mediaType}/${mediaId}/cast`}
          className={classes.link}
          variant="body2"
        >
          {/* More */}
          Оглянути увесь склад &nbsp;
          <ArrowRightAltIcon />
          {/* <Trans i18nKey="Btn.More" /> */}
        </MUILink>
      </Box>
    </Container>
  );
};

export default CastMedia;
