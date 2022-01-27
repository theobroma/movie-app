import { Container, Grid } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import SingleContent from '../../../@components/SingleContent';
import SingleContentSkeleton from '../../../@components/SingleContent/SingleContentSkeleton';
import CustomPagination from '../../../@components/UI/CustomPagination';
import { useTrendingMoviesQuery } from '../../../@store/trending/api';

const TrendingMoviesView = () => {
  const [queryPage, setQueryPage] = useQueryParam('page', NumberParam);
  const { data, isLoading, isFetching } = useTrendingMoviesQuery(
    queryPage || 1,
  );

  // console.log('isLoading', isLoading);
  // console.log('isFetching', isFetching);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageValue: number,
  ) => {
    if (pageValue !== 1) {
      setQueryPage(pageValue);
    } else {
      setQueryPage(undefined);
    }
    // Scroll to top when page changes
    window.scroll(0, 0);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        {data?.results.map((movie) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            {isFetching ? (
              <SingleContentSkeleton />
            ) : (
              <SingleContent movie={movie} />
            )}
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <CustomPagination
            onChange={handlePageChange}
            count={data?.total_pages}
            // page={data?.page}
            page={queryPage || 1}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrendingMoviesView;
