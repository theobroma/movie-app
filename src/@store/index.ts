import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { UIInitialStateType, uiReducer } from './ui/slice';
import { MoviesInitialStateType, moviesReducer } from './movies/slice';
import { TrendingInitialStateType, trendingReducer } from './trending/slice';
import { UserInitialStateType, userReducer } from './user/slice';

// export const rootReducer = combineReducers({
//   movies: moviesReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

export interface RootState {
  trending: TrendingInitialStateType;
  movies: MoviesInitialStateType;
  ui: UIInitialStateType;
  user: UserInitialStateType;
  router: RouterState;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    trending: trendingReducer,
    movies: moviesReducer,
    ui: uiReducer,
    user: userReducer,
    router: connectRouter(history),
  });
