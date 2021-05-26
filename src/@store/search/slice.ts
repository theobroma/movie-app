import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { searchPlaceResponseType } from '../../@types';

const searchInitialState = {
  // data: [] as Array<searchPlaceResponseType>,
  data: [] as any,
};

export type SearchInitialStateType = typeof searchInitialState;

export const searchTC = createAsyncThunk(
  'search/searchTC',
  async (searchText: string, thunkAPI) => {
    try {
      const res = await moviesApi.getSearch(searchText);
      return { data: res.data };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    clearData(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase('@@router/LOCATION_CHANGE', (state, action) => {
      state.data = [];
    });
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
      }
    });
  },
});

export const searchReducer = slice.reducer;
export const { clearData: clearDataAC } = slice.actions;
