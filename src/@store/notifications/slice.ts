import { createSlice } from '@reduxjs/toolkit';

const notificationsInitialState = {
  notifications: [] as any,
};

export type NotificationsInitialStateType = typeof notificationsInitialState;

export const slice = createSlice({
  name: 'notifications',
  initialState: notificationsInitialState,
  reducers: {
    // setThemeAC(state, action) {
    //   state.theme = action.payload;
    // },
  },
});

export const notificationsReducer = slice.reducer;
// export const { setThemeAC } = slice.actions;
