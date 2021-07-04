import { createSlice } from '@reduxjs/toolkit';

const notificationsInitialState = {
  notifications: [
    {
      message: 'Failed fetching data.1',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'warning',
      },
    },
    {
      message: 'Failed fetching data.2',
      options: {
        key: new Date().getTime() + Math.random() + 1,
        variant: 'warning',
      },
    },
  ] as any,
};

export type NotificationsInitialStateType = typeof notificationsInitialState;

export const slice = createSlice({
  name: 'notifications',
  initialState: notificationsInitialState,
  reducers: {
    enqueueSnackbarAC(state, action) {
      state.notifications.push(action.payload[0]);
    },
  },
});

export const notificationsReducer = slice.reducer;
export const { enqueueSnackbarAC } = slice.actions;
