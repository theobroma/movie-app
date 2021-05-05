import { combineReducers } from 'redux';
import { moviesReducer } from './movies/slice';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
