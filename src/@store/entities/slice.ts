import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';

const moviesInitialState = {
  ids: [],
  entities: {},
} as any;

export type EntitiesInitialStateType = typeof moviesInitialState;

export const getMediaDetailsTC = createAsyncThunk(
  'entities/getMovieDetails',
  async (
    param: { movieID: string | undefined; mediaType: string | undefined },
    thunkAPI,
  ) => {
    try {
      // thunkAPI.dispatch(resetStateAC());
      thunkAPI.dispatch(setLoadingAC(true));
      await waitForMe(500);
      const res1 = await moviesApi.getMovieDetails(
        param.movieID,
        param.mediaType,
      );
      return {
        data: res1.data,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      thunkAPI.dispatch(setLoadingAC(false));
    }
  },
);

export const slice = createSlice({
  name: 'entities',
  initialState: moviesInitialState,
  reducers: {
    setPageAC(state, action) {
      state.data.page = action.payload;
    },
    setLoadingAC(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    //  BY HAND
    builder.addCase(getMediaDetailsTC.fulfilled, (state, action) => {
      // reduce the collection by the id property into a shape of { 1: { ...user }}
      const entitiesbyId = action.payload.data.results.reduce(
        (byId: any, movie: any) => {
          byId[movie.id] = movie;
          return byId;
        },
        {},
      );
      state.entities = entitiesbyId;
      state.ids = Object.keys(entitiesbyId);
    });
  },
});

export const entitiesReducer = slice.reducer;
export const { setPageAC, setLoadingAC } = slice.actions;
