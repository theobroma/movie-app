import { Box, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useDebounce from '../../@hooks/useDebounce';
import { useNonInitialEffect } from '../../@hooks/useNonInitialEffect';
import { searchDataSelector } from '../../@store/search/selectors';
import { searchTC } from '../../@store/search/slice';
import { themeSelector } from '../../@store/ui/selectors';
import { setThemeAC } from '../../@store/ui/slice';
import { ThemeColorsType, THEME_COLORS } from '../../@types';
import { useStyles } from './AppBar.styles';
import SearchInput from './Search/SearchInput/SearchInput';
import SearchOutput from './Search/SearchOutput';
import SimpleDrawer from './SimpleDrawer';

export default function CustomAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentTheme = useSelector(themeSelector);
  const searchData = useSelector(searchDataSelector).results;
  const [open, setOpen] = useState(false); // sidebar
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 500);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchTC(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

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
    <div className={classes.root}>
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{
              marginRight: '16px',
            }}
          >
            <Link
              to={{ pathname: '/' }}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              MovieDB App
            </Link>
          </Typography>
          {/* search */}
          {/* <div style={{ margin: '5px 15px 10px 15px' }}>
            <SearchInput
              onChange={handleSearchInputChange}
              style={{ width: '100%', height: 50 }}
            />
          </div> */}
          <div className={classes.grow} />
          <IconButton
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            style={{ marginLeft: 'auto' }}
          >
            <SearchIcon />
          </IconButton>
          <Box>
            {currentTheme === THEME_COLORS.LIGHT ? (
              <Tooltip title="Switch theme to Dark">
                <IconButton aria-label="theme">
                  <NightIcon
                    onClick={() => handleSwitchDarkMode(THEME_COLORS.DARK)}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Switch theme to Light">
                <IconButton aria-label="theme">
                  <DayIcon
                    onClick={() => handleSwitchDarkMode(THEME_COLORS.LIGHT)}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
        {/* search */}
        {showMobileSearch && (
          <div style={{ margin: '5px 15px 10px 15px' }}>
            <SearchInput
              value={searchVal}
              onChange={handleSearchInputChange}
              style={{ width: '100%', height: 50 }}
              // onBlur={() => !searchVal && setShowOutput(false)}
              // onFocus={() => setShowOutput(true)}
            />
          </div>
        )}
      </AppBar>
      {/* search output */}
      {searchVal && showMobileSearch && <SearchOutput movies={searchData} />}
      <SimpleDrawer open={open} handleDrawerClose={handleDrawerClose} />
      {/* TODO: */}
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        mb content here...
        <div className={classes.drawerHeader} />
      </main> */}
    </div>
  );
}
