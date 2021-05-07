import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { MoviesResponseType } from '../../@types';

const moviesInitialState = {
  data: {} as MoviesResponseType,
};

export type MoviesInitialStateType = typeof moviesInitialState;

export const getTrendingMoviesTC = createAsyncThunk(
  'movies/getTrendingMovies',
  async (param: { page: number }, thunkAPI) => {
    try {
      const res = await moviesApi.getTrendingMovies(1);
      return { data: res.data };
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
        // state.data.total_pages = action.payload.data.total_pages;
        // state.data.total_results = action.payload.data.total_results;
        // state.data.results.push(...action.payload.data.results);
      }
    });
  },
});

export const moviesReducer = slice.reducer;
