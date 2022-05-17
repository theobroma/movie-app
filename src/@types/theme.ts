// https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
export const ThemeColors = {
  DARK: 'dark',
  LIGHT: 'light',
  DEEP_PURPLE_AMBER: 'deepPurpleAmber',
  PINK_BLUE_GREY_THEME: 'pinkBlueGrey',
} as const;

export type ThemeColorsType = typeof ThemeColors[keyof typeof ThemeColors];
