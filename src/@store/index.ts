import { combineReducers } from 'redux';
import { DetailsInitialStateType, detailsReducer } from './details/slice';
import { EntitiesInitialStateType, entitiesReducer } from './entities/slice';
import { MoviesInitialStateType, moviesReducer } from './movies/slice';
import { SearchInitialStateType, searchReducer } from './search/slice';
import { TrendingInitialStateType, trendingReducer } from './trending/slice';
import { UIInitialStateType, uiReducer } from './ui/slice';
import { UserInitialStateType, userReducer } from './user/slice';

export interface RootState {
  details: DetailsInitialStateType;
  entities: EntitiesInitialStateType;
  movies: MoviesInitialStateType;
  search: SearchInitialStateType;
  trending: TrendingInitialStateType;
  ui: UIInitialStateType;
  user: UserInitialStateType;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = () =>
  combineReducers<RootState>({
    details: detailsReducer,
    entities: entitiesReducer,
    movies: moviesReducer,
    search: searchReducer,
    trending: trendingReducer,
    ui: uiReducer,
    user: userReducer,
  });
