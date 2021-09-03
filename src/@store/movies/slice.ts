// !reducer just for normalizr sandbox
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { moviesApi } from '../../@api/movies-api';
import { MoviesResponseType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const moviesInitialState = {
  // data: {
  //   page: 1,
  //   results: Array(20).fill('none'),
  //   total_pages: 10,
  //   total_results: 0,
  // } as MoviesResponseType,
  // isLoading: true,
  ids: [],
  entities: {},
} as any;

export type MoviesInitialStateType = typeof moviesInitialState;

const movieEntity = new schema.Entity('movies');

export const getTrendingMoviesTC = createAsyncThunk(
  'movies/getTrendingMovies',
  async (param: { page: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res = await moviesApi.getTrendingMovies(param.page);
      // Normalize the data before passing it to our reducer
      // const normalized = normalize(res.data, [movieEntity]);
      // console.log(normalized);
      // return normalized.entities;
      return { data: res.data };
    } catch (err) {
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

export const slice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    setPageAC(state, action) {
      state.data.page = action.payload;
    },
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
    builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
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
    });
    // Normalizr
    // builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
    //   state.entities = action.payload.movies;
    //   state.ids = Object.keys(action.payload.movies || []);
    // });
  },
});

export const moviesReducer = slice.reducer;
export const { setPageAC, setLoadingAC } = slice.actions;
