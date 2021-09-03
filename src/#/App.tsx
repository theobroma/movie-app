import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingPage from '../@components/UI/LoadingPage';
import { IRoute, ROUTES } from '../@types';
import Page404View from '../@views/Page404View';

const MIN_LAZY_DELAY = 300;

const HomeView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "HomeView" */ '../@views/HomeView'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const MoviesDetailsView = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "MoviesDetailsView" */ '../@views/MoviesDetailsView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const FavouritesMoviesView = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "FavouritesMovieView" */ '../@views/FavouritesView/FavouritesMoviesView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const FavouritesTVView = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "FavouritesTVView" */ '../@views/FavouritesView/FavouritesTVView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const VisitedMoviesView = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "VisitedMovieView" */ '../@views/VisitedView/VisitedMoviesView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const VisitedTVView = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "VisitedTVView" */ '../@views/VisitedView/VisitedTVView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    component: HomeView,
    path: ROUTES.ROOT,
    exact: true,
    // layout: UserLayout,
  },
  {
    component: MoviesDetailsView,
    path: ROUTES.SINGLE_DETAILS,
    exact: true,
    // layout: UserLayout,
  },
  {
    component: FavouritesMoviesView,
    path: ROUTES.FAVOURITES_MOVIES,
    exact: true,
    // layout: UserLayout,
  },
  {
    component: FavouritesTVView,
    path: ROUTES.FAVOURITES_TV,
    exact: true,
    // layout: UserLayout,
  },
  {
    component: VisitedMoviesView,
    path: ROUTES.VISITED_MOVIES,
    exact: true,
    // layout: UserLayout,
  },
  {
    component: VisitedTVView,
    path: ROUTES.VISITED_TV,
    exact: true,
    // layout: UserLayout,
  },
];

export const AppContainer: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {APP_MAIN_ROUTES.map((route: IRoute) => (
          <Route key={route.path} {...route} />
        ))}
        <Route component={Page404View} />
      </Switch>
    </Suspense>
  );
};
