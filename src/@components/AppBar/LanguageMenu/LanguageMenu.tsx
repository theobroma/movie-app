// https://stackoverflow.com/a/55533600/3988363
import { IconButton } from '@material-ui/core';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNonInitialEffect } from '../../../@hooks/useNonInitialEffect';
import { themeSelector } from '../../../@store/ui/selectors';
import { setThemeAC } from '../../../@store/ui/slice';
import { ThemeColorsType } from '../../../@types';
import { StyledMenu, StyledMenuItem } from './LanguageMenu.styles';

const options = [
  'light',
  'dark',
  'deepPurpleAmber',
  'pinkBlueGrey',
] as ThemeColorsType[];

const LanguageMenu = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentTheme = useSelector(themeSelector);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(
    options.indexOf(currentTheme),
  );

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    dispatch(setThemeAC(options[index]));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useNonInitialEffect(() => {
    enqueueSnackbar(`Theme changed to ${currentTheme}`, {
      variant: 'warning',
    });
  }, [enqueueSnackbar, currentTheme]);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={(e) => handleClickListItem(e)}
      >
        <FormatColorFillIcon />
      </IconButton>
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
