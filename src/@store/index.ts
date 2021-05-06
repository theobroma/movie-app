import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { moviesReducer } from './movies/slice';

// export const rootReducer = combineReducers({
//   movies: moviesReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

export interface RootState {
  movies: any;
  router: RouterState;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    movies: moviesReducer,
    router: connectRouter(history),
  });
