import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';
import { CurrentWeatherResponseType, LocationResponseType } from '../../@types';

const currentWeatherInitialState = {
  lat: 0, // lat: 51.5341714,
  lon: 0, // lon: 33.3767724,
  location: {} as LocationResponseType,
  currentWeather: {} as CurrentWeatherResponseType,
};

export const getUserCoordinatesTC = createAsyncThunk(
  'currentWeather/getUserCoordinatesTC',
  (undf, thunkAPI) => {
    navigator.geolocation.getCurrentPosition((position) => {
      thunkAPI.dispatch(
        userCoordinatesAC({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      );
    });
  },
);

export const getCurrentWeatherTC = createAsyncThunk(
  'currentWeather/getCurrentWeather',
  async (param: { lat: number; lon: number }, thunkAPI) => {
    try {
      const res = await currentWeatherApi.currentWeather(param.lat, param.lon);
      thunkAPI.dispatch(setLocationAC(res.data.location));
      return { currentWeather: res.data.current };
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'currentWeather',
  initialState: currentWeatherInitialState,
  reducers: {
    userCoordinatesAC(
      state,
      action: PayloadAction<{ lat: number; lon: number }>,
    ) {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    setLocationAC(state, action: PayloadAction<LocationResponseType>) {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeatherTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.currentWeather = action.payload.currentWeather;
      }
    });
  },
});

export const currentWeatherReducer = slice.reducer;
export const { userCoordinatesAC, setLocationAC } = slice.actions;
