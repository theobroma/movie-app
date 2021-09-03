import { RootState } from '../index';

export const notificationsSelector = (state: RootState) => {
  return state.notifications.notifications;
};
