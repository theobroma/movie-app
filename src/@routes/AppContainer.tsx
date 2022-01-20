// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
// https://stackoverflow.com/a/37491381/3988363
// https://github.com/pbeshai/use-query-params/issues/108
// https://github.com/pbeshai/use-query-params/issues/196
import pMinDelay from 'p-min-delay';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import LoadingPage from '../@components/UI/LoadingPage';
import { AppLayout } from './AppLayout';

const MIN_LAZY_DELAY = 300;

const HomeView = lazy(() =>
  pMinDelay(import('../@views/HomeView'), MIN_LAZY_DELAY),
);

const TrendingMoviesView = lazy(() =>
  pMinDelay(
    import('../@views/TrendingView/TrendingMoviesView'),
    MIN_LAZY_DELAY,
  ),
);

const TrendingTVView = lazy(() =>
  pMinDelay(import('../@views/TrendingView/TrendingTVView'), MIN_LAZY_DELAY),
);

const MoviesDetailsView = lazy(() =>
  pMinDelay(import('../@views/MoviesDetailsView'), MIN_LAZY_DELAY),
);

const FavouritesLayout = lazy(() =>
  pMinDelay(
    import('../@views/FavouritesView/FavouritesLayout'),
    MIN_LAZY_DELAY,
  ),
);
const FavouritesMoviesView = lazy(() =>
  pMinDelay(
    import('../@views/FavouritesView/FavouritesMoviesView'),
    MIN_LAZY_DELAY,
  ),
);
const FavouritesTVView = lazy(() =>
  pMinDelay(
    import('../@views/FavouritesView/FavouritesTVView'),
    MIN_LAZY_DELAY,
  ),
);

const VisitedLayout = lazy(() =>
  pMinDelay(import('../@views/VisitedView/VisitedLayout'), MIN_LAZY_DELAY),
);
const VisitedMoviesView = lazy(() =>
  pMinDelay(import('../@views/VisitedView/VisitedMoviesView'), MIN_LAZY_DELAY),
);
const VisitedTVView = lazy(() =>
  pMinDelay(import('../@views/VisitedView/VisitedTVView'), MIN_LAZY_DELAY),
);

const Page404View = lazy(() => import('../@views/Page404View'));

export const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        {/* adapt for react-router v6 */}
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              {/* index means default */}
              <Route index element={<HomeView />} />
              <Route
                path="/details/:mediaType/:mediaId"
                element={<MoviesDetailsView />}
              />
              {/* Trending */}
              <Route path="trending" element={<Outlet />}>
                <Route path="movies" element={<TrendingMoviesView />} />
                <Route path="tv" element={<TrendingTVView />} />
                {/* <Route index element={<div>Click any tab.</div>} /> */}
              </Route>
              {/* Nested favourites */}
              <Route path="favourites" element={<FavouritesLayout />}>
                <Route path="movies" element={<FavouritesMoviesView />} />
                <Route path="tv" element={<FavouritesTVView />} />
                <Route index element={<div>Click any tab.</div>} />
              </Route>
              {/* Nested visited */}
              <Route path="visited" element={<VisitedLayout />}>
                <Route path="movies" element={<VisitedMoviesView />} />
                <Route path="tv" element={<VisitedTVView />} />
                <Route index element={<div>Click any tab.</div>} />
              </Route>
              <Route path="*" element={<Page404View />} />
            </Route>
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </Suspense>
  );
};

// TODO: mb move from this
// https://github.com/pbeshai/use-query-params/issues/108#issuecomment-785209454

/**
 * This is the main thing you need to use to adapt the react-router v6
 * API to what use-query-params expects.
 *
 * Pass this as the `ReactRouterRoute` prop to QueryParamProvider.
 */
const RouteAdapter = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(loc: Location) {
        navigate(loc, { replace: true, state: location.state });
      },
      push(loc: Location) {
        navigate(loc, { replace: false, state: location.state });
      },
    }),
    [navigate, location],
  );
  return children({ history: adaptedHistory, location });
};
