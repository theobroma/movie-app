// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
// https://stackoverflow.com/a/37491381/3988363
// https://github.com/pbeshai/use-query-params/issues/108
import pMinDelay from 'p-min-delay';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import LoadingPage from '../@components/UI/LoadingPage';
import { IRoute, ROUTES } from '../@types';
import { AppLayout } from './AppLayout';

const MIN_LAZY_DELAY = 300;

const HomeView = lazy(() =>
  pMinDelay(import('../@views/HomeView'), MIN_LAZY_DELAY),
);
const MoviesDetailsView = lazy(() =>
  pMinDelay(import('../@views/MoviesDetailsView'), MIN_LAZY_DELAY),
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
const VisitedMoviesView = lazy(() =>
  pMinDelay(import('../@views/VisitedView/VisitedMoviesView'), MIN_LAZY_DELAY),
);
const VisitedTVView = lazy(() =>
  pMinDelay(import('../@views/VisitedView/VisitedTVView'), MIN_LAZY_DELAY),
);

const Page404View = lazy(() => import('../@views/Page404View'));

export enum ROUTESssss {
  ROOT = '/',
  SINGLE_DETAILS = '/details/:mediaType/:id',
  FAVOURITES = '/favourites',
  FAVOURITES_MOVIES = '/favourites/movies',
  FAVOURITES_TV = '/favourites/tv',
  VISITED = '/visited',
  VISITED_MOVIES = '/visited/movies',
  VISITED_TV = '/visited/tv',
}

export const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        {/* adapt for react-router v6 */}
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomeView />} />
              {/* <Route
                path="cryptocurrencies/:id"
                element={<CryptoDetailsView />}
              />
              <Route path="cryptocurrencies" element={<MainView />} /> */}
              <Route path="exchanges" element={<div>exchanges</div>} />
              <Route path="*" element={<div>Not Found</div>} />
            </Route>
          </Routes>
          {/* <Switch>
            <Redirect from="/index.html" to="/" exact />
            {APP_MAIN_ROUTES.map((route: IRoute) => (
              <Route key={`${route.path}`} {...route}>
                <route.layout>
                  <route.comp />
                </route.layout>
              </Route>
            ))}

            <Route
              path="/404"
              render={() => (
                <GuestLayout>
                  <Page404View />
                </GuestLayout>
              )}
            />
            <Redirect to="/404" />
          </Switch> */}
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
      replace(loc: any) {
        navigate(loc, { replace: true, state: location.state });
      },
      push(loc: any) {
        navigate(loc, { replace: false, state: location.state });
      },
    }),
    [navigate, location],
  );
  return children({ history: adaptedHistory, location });
};
