// https://stackoverflow.com/a/55533600/3988363
import { IconButton, Tooltip } from '@material-ui/core';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import TranslateIcon from '@material-ui/icons/Translate';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNonInitialEffect } from '../../../@hooks/useNonInitialEffect';
import { languageSelector, themeSelector } from '../../../@store/ui/selectors';
import { setLanguageAC, setThemeAC } from '../../../@store/ui/slice';
import { ThemeColorsType } from '../../../@types';
import { StyledMenu, StyledMenuItem } from './LanguageMenu.styles';

const options = ['en', 'ua'] as any[];

const LanguageMenu = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentLanguage = useSelector(languageSelector);
  const currentTheme = useSelector(themeSelector);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(
    options.indexOf(currentLanguage),
  );

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    dispatch(setLanguageAC(options[index]));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useNonInitialEffect(() => {
    enqueueSnackbar(`Language changed to ${currentLanguage}`, {
      variant: 'warning',
    });
  }, [enqueueSnackbar, currentLanguage]);

  return (
    <div>
      <Tooltip title="Change language">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={(e) => handleClickListItem(e)}
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>

      {/* Dropdown */}
      <StyledMenu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <StyledMenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {index === selectedIndex ? (
              <RadioButtonCheckedIcon
                fontSize="small"
                style={{ marginRight: '8px' }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                fontSize="small"
                style={{ marginRight: '8px' }}
              />
            )}
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default LanguageMenu;
