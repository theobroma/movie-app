import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';

const detailsInitialState = {
  data: {},
  trailers: {
    results: [],
  },
  credits: {},
  isLoading: false,
  similar: {
    results: [],
  },
} as any;

export type DetailsInitialStateType = typeof detailsInitialState;

export const getMovieDetailsTC = createAsyncThunk(
  'details/getMovieDetails',
  async (
    param: { movieID: string | undefined; mediaType: string | undefined },
    thunkAPI,
  ) => {
    try {
      thunkAPI.dispatch(resetStateAC());
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res1 = await moviesApi.getMovieDetails(
        param.movieID,
        param.mediaType,
      );
      const res2 = await moviesApi.getTrailers(param.movieID, param.mediaType);
      const res3 = await moviesApi.getCredits(param.movieID, param.mediaType);
      const res4 = await moviesApi.getSimilar(param.movieID, param.mediaType);
      return {
        data: res1.data,
        trailers: res2.data,
        credits: res3.data,
        similar: res4.data,
      };
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
  name: 'details',
  initialState: detailsInitialState,
  reducers: {
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
    resetStateAC: () => detailsInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetailsTC.pending, (state) => {
      //   state.isLoading = true; !rejected with error!
    });
    builder.addCase(getMovieDetailsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
        state.trailers = action.payload.trailers;
        state.credits = action.payload.credits;
        state.similar = action.payload.similar;
      }
      //   state.isLoading = false; !rejected with error!
    });
  },
});

export const detailsReducer = slice.reducer;
export const { setLoadingAC, resetStateAC } = slice.actions;
