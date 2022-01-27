import { Box, IconButton, Tooltip } from '@material-ui/core';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import { useSnackbar } from 'notistack';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNonInitialEffect } from '../../../@hooks/useNonInitialEffect';
import { themeSelector } from '../../../@store/ui/selectors';
import { setThemeAC } from '../../../@store/ui/slice';
import { ThemeColorsType, THEME_COLORS } from '../../../@types';

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentTheme = useSelector(themeSelector);

  useNonInitialEffect(() => {
    enqueueSnackbar(`Theme changed to ${currentTheme}`, {
      variant: 'warning',
    });
  }, [enqueueSnackbar, currentTheme]);

  const handleSwitchDarkMode = useCallback(
    (theme: ThemeColorsType) => {
      dispatch(setThemeAC(theme));
    },
    [dispatch],
  );

  return (
    <Box>
      {currentTheme === THEME_COLORS.LIGHT ? (
        <Tooltip title="Switch theme to Dark">
          <IconButton
            aria-label="theme"
            onClick={() => handleSwitchDarkMode(THEME_COLORS.DARK)}
            color="inherit"
          >
            <NightIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Switch theme to Light">
          <IconButton
            aria-label="theme"
            onClick={() => handleSwitchDarkMode(THEME_COLORS.LIGHT)}
            color="inherit"
          >
            <DayIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default ThemeSwitch;
