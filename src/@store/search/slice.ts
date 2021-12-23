import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { searchPlaceResponseType } from '../../@types';

const searchInitialState = {
  // data: [] as Array<searchPlaceResponseType>,
  data: [] as any,
};

export type SearchInitialStateType = typeof searchInitialState;

export const searchTC = createAsyncThunk<any, any, any>(
  'search/searchTC',
  async (searchText: string, thunkAPI) => {
    try {
      const res = await moviesApi.getSearch(searchText);
      return { data: res.data };
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
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    // TODO: not working without connected-react-router
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
