import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { moviesApi } from '../../@api/movies-api';
import type { SimilarMoviesResponseType } from '../../@types';
import { SimilarMoviesResponseSchema } from '../../@types';

const searchInitialState = {
  data: {} as SimilarMoviesResponseType,
};

// export type SearchInitialStateType = typeof searchInitialState;

export const searchTC = createAsyncThunk<SimilarMoviesResponseType, string>(
  'search/searchTC',
  async (searchText, thunkAPI) => {
    try {
      const res = await moviesApi.getSearch(searchText);

      // ZOD validation
      try {
        // response same like in similar
        SimilarMoviesResponseSchema.parse(res.data);
      } catch (error) {
        console.log(error);
      }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    // clearData(state) {
    //   state.data = {} as SimilarMoviesResponseType;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});

// export const searchReducer = searchSlice.reducer;
// export const { clearData: clearDataAC } = searchSlice.actions;
