import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { similarSlice } from '../@features/SimilarMedia/store/slice';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import { detailsSlice } from './details/slice';
import { entitiesSlice } from './entities/slice';
import { moviesSlice } from './movies/slice';
import { searchSlice } from './search/slice';
import { trendingTVapi } from './trending/api';
import { trendingSlice } from './trending/slice';
import { uiSlice } from './ui/slice';
import { userSlice } from './user/slice';

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['filter'], // will not be persisted
  whitelist: ['ui', 'user'], // will be persisted
};

const reducers = {
  [detailsSlice.name]: detailsSlice.reducer,
  [entitiesSlice.name]: entitiesSlice.reducer,
  [moviesSlice.name]: moviesSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
  [similarSlice.name]: similarSlice.reducer,
  [trendingSlice.name]: trendingSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  // [anyApi.reducerPath]: anyApi.reducer,
  [trendingTVapi.reducerPath]: trendingTVapi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, trendingTVapi.middleware),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export const persistor = persistStore(store);
export default { store, persistor };

// ==================== TYPES ====================
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
