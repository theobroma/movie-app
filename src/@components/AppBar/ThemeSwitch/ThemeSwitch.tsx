import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { Trans } from 'react-i18next';

import { Box, IconButton, Tooltip } from '@material-ui/core';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';

import { useNonInitialEffect } from '../../../@hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { themeSelector } from '../../../@store/ui/selectors';
import { setThemeAC } from '../../../@store/ui/slice';
import type { ThemeColorsType } from '../../../@types';
import { ThemeColors } from '../../../@types';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentTheme = useAppSelector(themeSelector);

  useNonInitialEffect(() => {
    enqueueSnackbar(
      // `Theme changed to ${currentTheme}`
      <>
        <Trans i18nKey="Snack.ChangedTheme" />
        &nbsp;
        {currentTheme}
      </>,
      {
        variant: 'warning',
      },
    );
  }, [enqueueSnackbar, currentTheme]);

  const handleSwitchDarkMode = useCallback(
    (theme: ThemeColorsType) => {
      dispatch(setThemeAC(theme));
    },
    [dispatch],
  );

  return (
    <Box>
      {currentTheme === ThemeColors.LIGHT ? (
        <Tooltip
          // title="Switch theme to Dark"
          title={
            <>
              <Trans i18nKey="Tooltip.ChangeTheme" />
              &nbsp;`Dark`
            </>
          }
        >
          <IconButton
            aria-label="theme"
            onClick={() => handleSwitchDarkMode(ThemeColors.DARK)}
            color="inherit"
          >
            <NightIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          // title="Switch theme to Light"
          title={
            <>
              <Trans i18nKey="Tooltip.ChangeTheme" />
              &nbsp;`Light`
            </>
          }
        >
          <IconButton
            aria-label="theme"
            onClick={() => handleSwitchDarkMode(ThemeColors.LIGHT)}
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
