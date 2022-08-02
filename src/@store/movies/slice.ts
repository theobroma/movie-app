// !reducer just for normalizr sandbox
// https://redux-toolkit.js.org/usage/usage-guide#managing-normalized-data
// https://habr.com/ru/post/332628/?_ga=2.71738581.778609750.1642412344-1976744204.1615316867
// https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#normalizedata-schema
import { normalize, schema } from 'normalizr';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';

const moviesInitialState = {
  ids: [],
  entities: {},
  isLoading: false,
} as any;

export type MoviesInitialStateType = typeof moviesInitialState;

// SCHEMA
const movieSchema = new schema.Entity('movie');
const tvSchema = new schema.Entity('tv');

const mediaAllSchema = new schema.Array(
  {
    movie: movieSchema,
    tv: tvSchema,
  },
  (input, parent, key) => `${input.media_type}`,
);
// end SCHEMA

export const getTrendingMoviesNormalizedTC = createAsyncThunk<
  any,
  { page: number },
  any
>('movies/getTrendingMovies', async (param, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoadingAC(true));
    await waitForMe(500);
    const res = await moviesApi.getTrendingAll(param.page);
    // const res = await moviesApi.getTrendingMovies(param.page);
    // Normalize the data before passing it to our reducer
    const originalData = res.data.results;
    const normalized = normalize(originalData, mediaAllSchema);
    console.log(normalized);
    return normalized;
    // return { data: res.data };
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  } finally {
    thunkAPI.dispatch(setLoadingAC(false));
  }
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    //  BY HAND
    // builder.addCase(
    //   getTrendingMoviesNormalizedTC.fulfilled,
    //   (state, action) => {
    //     // reduce the collection by the id property into a shape of { 1: { ...user }}
    //     const entitiesbyId = action.payload.data.results.reduce(
    //       (byId: any, movie: any) => {
    //         byId[movie.id] = movie;
    //         return byId;
    //       },
    //       {},
    //     );
    //     state.entities = entitiesbyId;
    //     state.ids = Object.keys(entitiesbyId);
    //   },
    // );

    // Normalizr
    builder.addCase(
      getTrendingMoviesNormalizedTC.fulfilled,
      (state, action) => {
        state.entities = action.payload.entities;
        state.ids = action.payload.result;
        // state.ids = Object.keys(action.payload.results || []);
      },
    );
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { setLoadingAC } = moviesSlice.actions;
