import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../../@api/movies-api';
import {
  SimilarMediaAllResponseSchema,
  SimilarMediaAllResponseType,
} from '../../../@types';
import { waitForMe } from '../../../@utils/waitforme';

const similarInitialState = {
  data: {} as SimilarMediaAllResponseType,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const getSimilarMediaTC = createAsyncThunk<
  SimilarMediaAllResponseType,
  any,
  any
>(
  'similar/getSimilarMedia',
  async (
    param: { mediaId: string | undefined; mediaType: string | undefined },
    thunkAPI,
  ) => {
    try {
      thunkAPI.dispatch(resetStateAC());
      await waitForMe(500);
      const res = await moviesApi.getSimilar(param.mediaId, param.mediaType);

      // ZOD validation
      try {
        SimilarMediaAllResponseSchema.parse(res.data);
        // SimilarMoviesResponseSchema.parse(res.data);
        // SimilarTVResponseSchema.parse(res.data);
      } catch (error) {
        // Log & alert error <-- very important!
        console.log(error);
      }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export type SimilarInitialStateType = typeof similarInitialState;

export const slice = createSlice({
  name: 'similar',
  initialState: similarInitialState,
  reducers: {
    resetStateAC: () => similarInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getSimilarMediaTC.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getSimilarMediaTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(getSimilarMediaTC.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      if (action.payload instanceof Error) {
        state.errorMessage = action.payload.message;
      }
    });
  },
});

export const similarReducer = slice.reducer;
export const { resetStateAC } = slice.actions;
