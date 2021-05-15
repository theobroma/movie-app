import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const SingleContentSkeleton: React.FC = () => {
  return (
    <Box pt={0.5}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export default SingleContentSkeleton;
