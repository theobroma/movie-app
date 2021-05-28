import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { DetailsInitialStateType, detailsReducer } from './details/slice';
import { MoviesInitialStateType, moviesReducer } from './movies/slice';
import { SearchInitialStateType, searchReducer } from './search/slice';
import { TrendingInitialStateType, trendingReducer } from './trending/slice';
import { UIInitialStateType, uiReducer } from './ui/slice';
import { UserInitialStateType, userReducer } from './user/slice';

export interface RootState {
  details: DetailsInitialStateType;
  movies: MoviesInitialStateType;
  router: RouterState;
  search: SearchInitialStateType;
  trending: TrendingInitialStateType;
  ui: UIInitialStateType;
  user: UserInitialStateType;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    details: detailsReducer,
    movies: moviesReducer,
    router: connectRouter(history),
    search: searchReducer,
    trending: trendingReducer,
    ui: uiReducer,
    user: userReducer,
  });
