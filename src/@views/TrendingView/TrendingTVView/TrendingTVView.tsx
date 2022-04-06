import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NumberParam, useQueryParam } from 'use-query-params';
import SingleContent from '../../../@components/SingleContent';
import SingleContentSkeleton from '../../../@components/SingleContent/SingleContentSkeleton';
import CustomPagination from '../../../@components/UI/CustomPagination';
import { useTrendingTVQuery } from '../../../@store/trending/api';
import { languageSelector } from '../../../@store/ui/selectors';
import { alpha2iso } from '../../../@utils/alpha2iso';

const TrendingTVView = () => {
  const [queryPage, setQueryPage] = useQueryParam('page', NumberParam);
  const currentLanguage = useSelector(languageSelector);
  const langISOCode = alpha2iso(currentLanguage);

  const { data, isFetching } = useTrendingTVQuery({
    page: queryPage || 1,
    isoCode: langISOCode,
  });

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
        <Grid item xs={12}>
          <Box justifyContent="space-between" display="flex">
            <Typography component="h2" variant="h4">
              Trending TV Shows
            </Typography>
          </Box>
        </Grid>
        {data?.results.map((tv) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            {isFetching ? (
              <SingleContentSkeleton />
            ) : (
              <SingleContent movie={tv} />
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

export default TrendingTVView;
