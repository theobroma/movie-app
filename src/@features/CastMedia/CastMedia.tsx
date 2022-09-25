import React from 'react';

// import { Trans } from 'react-i18next';
import { Box, Container, Typography } from '@material-ui/core';

// type Props = {};

const CastMedia = () => {
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Cast
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
      </Box>
    </Container>
  );
};

export default CastMedia;
