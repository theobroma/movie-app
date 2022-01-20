import * as React from 'react';
import { useListPostsQuery } from '../../../@store/trending/api';

const TrendingTVView = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isFetching } = useListPostsQuery(page);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data?.results) {
    return <div>No posts :(</div>;
  }

  return (
    <div>
      {data.results.map(({ id, title, status }: any) => (
        <div key={id}>
          {title} - {status}
        </div>
      ))}
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        // isLoading={isFetching}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        // isLoading={isFetching}
      >
        Next
      </button>
    </div>
  );
};

export default TrendingTVView;
