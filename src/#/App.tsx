import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingPage from '../@components/UI/LoadingPage';
import { IRoute, ROUTES } from '../@types';
// import HomeView from '../@views/HomeView';

// const MUSIC = lazy(() => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => resolve(import('./Music')), 1000);
//   });
// });

const HomeView = lazy(() => {
  return Promise.all([
    import('../@views/HomeView'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    component: HomeView,
    path: ROUTES.ROOT,
    // layout: UserLayout,
  },
];

export const AppContainer: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {APP_MAIN_ROUTES.map((route: IRoute) => (
          // <NestedRoute key={route.path} {...route} />
          <Route
            key={route.path}
            {...route}
            // exact={exact}
            // path={path}
            // render={renderRoute}
            // location={location}
          />
        ))}
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );
};
