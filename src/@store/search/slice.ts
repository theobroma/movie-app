import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import {
  SimilarMoviesResponseSchema,
  SimilarMoviesResponseType,
} from '../../@types';

const searchInitialState = {
  data: {} as SimilarMoviesResponseType,
};

export type SearchInitialStateType = typeof searchInitialState;

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

export const slice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    clearData(state) {
      state.data = {} as SimilarMoviesResponseType;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});

export const searchReducer = slice.reducer;
export const { clearData: clearDataAC } = slice.actions;
