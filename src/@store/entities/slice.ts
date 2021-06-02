import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';
import { getTrendingMoviesTC } from '../movies/slice';

const entitiesInitialState = {
  //   moviesById: {},
  //   genresById: {},
  entities: {},
  ids: [],
} as any;

export type entitiesInitialStateType = typeof entitiesInitialState;

export const slice = createSlice({
  name: 'entities',
  initialState: entitiesInitialState,
  reducers: {
    // setLoadingAC(state, action) {
    //   state.isLoading = action.payload;
    // },
    resetStateAC: () => entitiesInitialState,
  },
  extraReducers: (builder) => {
    // builder.addCase(getMovieDetailsTC.pending, (state) => {
    //   //   state.isLoading = true; !rejected with error!
    // });
    // builder.addCase(getMovieDetailsTC.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     state.data = action.payload.data;
    //     state.trailers = action.payload.trailers;
    //     state.credits = action.payload.credits;
    //   }
    //   //   state.isLoading = false; !rejected with error!
    // });
    // Normalizr
    // builder.addCase(getTrendingMoviesTC.fulfilled, (state, action) => {
    //   console.log('getTrendingMoviesTC.fulfilled from entities');
    //   state.entities = action.payload.movies;
    //   state.ids = Object.keys(action.payload.movies || []);
    // });
  },
});

export const entitiesReducer = slice.reducer;
export const { resetStateAC } = slice.actions;
