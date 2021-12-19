// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
import pMinDelay from 'p-min-delay';
import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingPage from '../@components/UI/LoadingPage';
import { IRoute, ROUTES } from '../@types';
import { GuestLayout } from './AppLayout';

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

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    comp: HomeView,
    path: ROUTES.ROOT,
    exact: true,
    layout: GuestLayout,
  },
  {
    comp: MoviesDetailsView,
    path: ROUTES.SINGLE_DETAILS,
    exact: true,
    layout: GuestLayout,
  },
  {
    comp: FavouritesMoviesView,
    path: ROUTES.FAVOURITES_MOVIES,
    exact: true,
    layout: GuestLayout,
  },
  {
    comp: FavouritesTVView,
    path: ROUTES.FAVOURITES_TV,
    exact: true,
    layout: GuestLayout,
  },
  {
    comp: VisitedMoviesView,
    path: ROUTES.VISITED_MOVIES,
    exact: true,
    layout: GuestLayout,
  },
  {
    comp: VisitedTVView,
    path: ROUTES.VISITED_TV,
    exact: true,
    layout: GuestLayout,
  },
];

export const AppContainer: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {APP_MAIN_ROUTES.map((route: IRoute) => (
          <Route key={`${route.path}`} {...route}>
            <route.layout>
              <route.comp />
            </route.layout>
          </Route>
        ))}
        {/* 404 */}
        {/* https://stackoverflow.com/a/37491381/3988363 */}
        <Route
          path="/404"
          render={() => (
            <GuestLayout>
              <Page404View />
            </GuestLayout>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};
