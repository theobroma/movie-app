import { alpha2iso } from '../../@utils/alpha2iso';
import { RootState } from '../configureStore';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};

export const languageSelector = (state: RootState) => {
  return state.ui.language;
};

export const languageISOSelector = (state: RootState) => {
  return alpha2iso(state.ui.language);
};
