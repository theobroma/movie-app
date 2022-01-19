// !reducer just for normalizr sandbox
// https://redux-toolkit.js.org/usage/usage-guide#managing-normalized-data
// https://habr.com/ru/post/332628/?_ga=2.71738581.778609750.1642412344-1976744204.1615316867
// https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#normalizedata-schema
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';

const moviesInitialState = {
  ids: [],
  entities: {},
} as any;

export type MoviesInitialStateType = typeof moviesInitialState;

const movieSchema = new schema.Entity('movie');
const tvSchema = new schema.Entity('tv');

const mediaAllSchema = new schema.Array(
  {
    movie: movieSchema,
    tv: tvSchema,
  },
  (input, parent, key) => `${input.media_type}`,
);

export const getTrendingMoviesNormalizedTC = createAsyncThunk<any, any, any>(
  'movies/getTrendingMovies',
  async (param: { page: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res = await moviesApi.getTrendingAll(param.page);
      // const res = await moviesApi.getTrendingMovies(param.page);
      // Normalize the data before passing it to our reducer
      const originalData = res.data.results;
      const normalized = normalize(originalData, mediaAllSchema);
      console.log(normalized);
      // return normalized.entities;
      return { data: res.data };
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      thunkAPI.dispatch(setLoadingAC(false));
    }
  },
);

// Define a movie schema
// const movie = new schema.Entity('movies');

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    // setPageAC(state, action) {
    //   state.data.page = action.payload;
    // },
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     state.data = action.payload.data;
    //   }
    // });
    //  BY HAND
    builder.addCase(
      getTrendingMoviesNormalizedTC.fulfilled,
      (state, action) => {
        // reduce the collection by the id property into a shape of { 1: { ...user }}
        const entitiesbyId = action.payload.data.results.reduce(
          (byId: any, movie: any) => {
            byId[movie.id] = movie;
            return byId;
          },
          {},
        );
        state.entities = entitiesbyId;
        state.ids = Object.keys(entitiesbyId);
      },
    );
    // Normalizr
    // builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
    //   state.entities = action.payload.movies;
    //   state.ids = Object.keys(action.payload.movies || []);
    // });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { setLoadingAC } = moviesSlice.actions;
