import { Container, Grid } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParam, NumberParam } from 'use-query-params';
import CustomPagination from '../../@components/UI/CustomPagination';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/SingleContent/SingleContentSkeleton';
import { trendingSelector } from '../../@store/trending/selectors';
import { getTrendingAllTC, setPageAC } from '../../@store/trending/slice';
import { getTrendingMoviesTC } from '../../@store/movies/slice';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: { page, total_pages, results: trendingAllmovies },
    isLoading,
  } = useSelector(trendingSelector);

  const [queryPage, setQueryPage] = useQueryParam('page', NumberParam);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageValue: number,
  ) => {
    dispatch(setPageAC(pageValue));
    if (pageValue !== 1) {
      setQueryPage(pageValue);
    } else {
      setQueryPage(undefined);
    }
    // Scroll to top when page changes
    window.scroll(0, 0);
  };

  useEffect(() => {
    const pageValue = queryPage || 1;
    dispatch(getTrendingAllTC({ page: pageValue }));
    // TEST
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch, queryPage]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        {trendingAllmovies?.map((movie) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            {isLoading ? (
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
            count={total_pages}
            page={page}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;
