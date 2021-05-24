import { RootState } from '../index';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};
