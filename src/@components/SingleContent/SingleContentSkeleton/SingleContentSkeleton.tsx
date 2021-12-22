import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const SingleContentSkeleton: React.FC = () => {
  return (
    <Box pt={0.5}>
      <Skeleton variant="rect" width="100%" height={261} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export default SingleContentSkeleton;
