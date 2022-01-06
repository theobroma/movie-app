import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import {
  SimilarMediaAllResponseSchema,
  SimilarMoviesResponseSchema,
  SimilarTVResponseSchema,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const detailsInitialState = {
  data: {},
  trailers: {
    results: [],
  },
  credits: {},
  isLoading: false,
} as any;

export type DetailsInitialStateType = typeof detailsInitialState;

export const getMediaDetailsTC = createAsyncThunk<
  any,
  { mediaId: string; mediaType: string },
  any
>('details/getMovieDetails', async (param, thunkAPI) => {
  try {
    thunkAPI.dispatch(resetStateAC());
    thunkAPI.dispatch(setLoadingAC(true));
    await waitForMe(500);
    const res1 = await moviesApi.getMediaDetails(
      param.mediaId,
      param.mediaType,
    );
    const res2 = await moviesApi.getTrailers(param.mediaId, param.mediaType);
    const res3 = await moviesApi.getCredits(param.mediaId, param.mediaType);

    // ZOD validation
    // try {
    //   SimilarMediaAllResponseSchema.parse(res4.data);
    //   // SimilarMoviesResponseSchema.parse(res4.data);
    //   // SimilarTVResponseSchema.parse(res4.data);
    // } catch (error) {
    //   // TODO:
    //   // Log & alert error <-- very important!
    //   console.log(error);
    // }

    return {
      data: res1.data,
      trailers: res2.data,
      credits: res3.data,
    };
  } catch (err: any) {
    // Use `err.response.data` as `action.payload` for a `rejected` action,
    // by explicitly returning it using the `rejectWithValue()` utility
    return thunkAPI.rejectWithValue(err.response.data);
  } finally {
    thunkAPI.dispatch(setLoadingAC(false));
  }
});

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
    builder.addCase(getMediaDetailsTC.pending, (state) => {
      //   state.isLoading = true; !rejected with error!
    });
    builder.addCase(getMediaDetailsTC.fulfilled, (state, action) => {
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
