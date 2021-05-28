import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { MoviesResponseType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const moviesInitialState = {
  data: {
    page: 1,
    results: Array(20).fill('none'),
    total_pages: 10,
    total_results: 0,
  } as MoviesResponseType,
  isLoading: true,
};

export type MoviesInitialStateType = typeof moviesInitialState;

export const getTrendingMoviesTC = createAsyncThunk(
  'movies/getTrendingMovies',
  async (param: { page: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res = await moviesApi.getTrendingAll(param.page);
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
    builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
      }
    });
  },
});

export const moviesReducer = slice.reducer;
export const { setPageAC, setLoadingAC } = slice.actions;
