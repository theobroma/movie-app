import { RootState } from '../configureStore';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};
