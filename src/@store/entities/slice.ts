import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { MEDIA_TYPE } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const entitiesInitialState = {
  movies: {
    ids: [],
    entities: {},
  },
  tv: {
    ids: [],
    entities: {},
  },
} as any;

export type EntitiesInitialStateType = typeof entitiesInitialState;

export const getMediaDetailsTC = createAsyncThunk(
  'entities/getMovieDetails',
  async (
    param: { movieID: string | undefined; mediaType: string | undefined },
    thunkAPI,
  ) => {
    try {
      // thunkAPI.dispatch(resetStateAC());
      // thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(300);
      const res1 = await moviesApi.getMovieDetails(
        param.movieID,
        param.mediaType,
      );
      return {
        data: res1.data,
        mediaType: param.mediaType,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      // thunkAPI.dispatch(setLoadingAC(false));
    }
  },
);

export const slice = createSlice({
  name: 'entities',
  initialState: entitiesInitialState,
  reducers: {
    // setPageAC(state, action) {
    //   state.data.page = action.payload;
    // },
    // setLoadingAC(state, action) {
    //   state.isLoading = action.payload;
    // },
  },
  extraReducers: (builder) => {
    //  BY HAND
    builder.addCase(getMediaDetailsTC.fulfilled, (state, action) => {
      // reduce the collection by the id property into a shape of { 1: { ...user }}
      const obj = action.payload.data;
      const { mediaType } = action.payload;
      if (mediaType === MEDIA_TYPE.TV) {
        state.tv.entities[obj.id] = obj;
        state.tv.ids = Object.keys(state.tv.entities || {});
      } else {
        state.movies.entities[obj.id] = obj;
        state.movies.ids = Object.keys(state.movies.entities || {});
      }
    });
  },
});

export const entitiesReducer = slice.reducer;
// export const { setPageAC } = slice.actions;
