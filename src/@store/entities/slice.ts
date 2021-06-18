import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../../@api/movies-api';
import { waitForMe } from '../../@utils/waitforme';

const entitiesInitialState = {
  ids: [],
  entities: {},
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
    setPageAC(state, action) {
      state.data.page = action.payload;
    },
    // setLoadingAC(state, action) {
    //   state.isLoading = action.payload;
    // },
  },
  extraReducers: (builder) => {
    //  BY HAND
    builder.addCase(getMediaDetailsTC.fulfilled, (state, action) => {
      // reduce the collection by the id property into a shape of { 1: { ...user }}
      // const entitiesbyId = action.payload.data.results.reduce(
      //   (byId: any, movie: any) => {
      //     byId[movie.id] = movie;
      //     return byId;
      //   },
      //   {},
      // );
      // state.entities = entitiesbyId;
      // state.ids = Object.keys(entitiesbyId)
      // ========================;
      // const { id } = action.payload.data;
      // const index = state.ids.indexOf(id);
      // const isVisited = index !== -1;
      // // remove if exist and add again in the begin
      // if (isVisited) {
      //   state.ids.splice(index, 1);
      // }
      // state.ids.push(id);
      // ========================
      const obj = action.payload.data;
      state.entities[obj.id] = obj;
      state.ids = Object.keys(state.entities);
    });
  },
});

export const entitiesReducer = slice.reducer;
export const { setPageAC } = slice.actions;
