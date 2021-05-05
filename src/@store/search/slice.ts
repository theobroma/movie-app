import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchAPI } from '../../@api/search-api';
import { searchPlaceResponseType } from '../../@types';

const searchInitialState = {
  data: [] as Array<searchPlaceResponseType>,
};

export const searchTC = createAsyncThunk(
  'search/searchTC',
  async (place: string, thunkAPI) => {
    try {
      const res = await searchAPI.place(place);
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
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
      }
    });
  },
});

export const searchReducer = slice.reducer;
export const { clearData: clearDataAC } = slice.actions;
