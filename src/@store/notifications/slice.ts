import { createSlice } from '@reduxjs/toolkit';

export const ENQUEUE_SNACKBAR = 'enqueueSnackbarAC';
export const CLOSE_SNACKBAR = 'closeSnackbar';
export const REMOVE_SNACKBAR = 'removeSnackbarAC';

const notificationsInitialState = {
  //   notifications: [
  //     {
  //       message: 'Failed fetching data.1',
  //       options: {
  //         key: new Date().getTime() + Math.random(),
  //         variant: 'warning',
  //       },
  //     },
  //     {
  //       message: 'Failed fetching data.2',
  //       options: {
  //         key: new Date().getTime() + Math.random() + 1,
  //         variant: 'warning',
  //       },
  //     },
  //   ] as any,
  notifications: [] as any,
};

export type NotificationsInitialStateType = typeof notificationsInitialState;

export const slice = createSlice({
  name: 'notifications',
  initialState: notificationsInitialState,
  reducers: {
    enqueueSnackbarAC(state, action) {
      const notification = action.payload[0];
      console.log(notification);
      state.notifications.push(action.payload[0]);
    },
    [REMOVE_SNACKBAR]: (state, { payload }) => {
      state.notifications = state.notifications.filter(
        (notification: any) => notification.key !== payload,
      );
    },
  },
});

export const notificationsReducer = slice.reducer;
export const { enqueueSnackbarAC, removeSnackbarAC } = slice.actions;
