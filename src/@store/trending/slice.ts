import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import {
  MoviesResponseType,
  MoviesResponseSchema,
  TVResponseSchema,
  MediaAllResponseSchema,
} from '../../@types';
// import { MoviesResponseType } from '../../@types';
// import { MoviesResponseSchema } from '../../@types/z.movie';
import { waitForMe } from '../../@utils/waitforme';

const trendingInitialState = {
  data: {
    page: 1,
    results: Array(20).fill('none'),
    total_pages: 10,
    total_results: 0,
  } as MoviesResponseType,
  isLoading: true,
};

export type TrendingInitialStateType = typeof trendingInitialState;

export const getTrendingAllTC = createAsyncThunk<any, any, any>(
  'trending/getTrendingAll',
  async (param: { page: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res = await moviesApi.getTrendingAll(param.page);
      // const res = await moviesApi.getTrendingMovies(param.page);
      // const res = await moviesApi.getTrendingTV(param.page);
      // ZOD validation
      try {
        MediaAllResponseSchema.parse(res.data);
        // MoviesResponseSchema.parse(res.data);
        // TVResponseSchema.parse(res.data);
      } catch (error) {
        // Log & alert error <-- very important!
        console.log(error);
      }

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

export const trendingSlice = createSlice({
  name: 'trending',
  initialState: trendingInitialState,
  reducers: {
    setPageAC(state, action) {
      state.data.page = action.payload;
    },
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrendingAllTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
      }
    });
  },
});

export const trendingReducer = trendingSlice.reducer;
export const { setPageAC, setLoadingAC } = trendingSlice.actions;
