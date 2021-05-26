import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useDebounce from '../../@hooks/useDebounce';
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
  const currentTheme = useSelector(themeSelector);
  const searchData = useSelector(searchDataSelector).results;
  const [open, setOpen] = useState(false); // sidebar
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 300);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(searchTC('terminator'));
  }, [dispatch]);

  const handleSwitchDarkMode = useCallback(
    (theme: ThemeColorsType) => {
      dispatch(setThemeAC(theme));
    },
    [dispatch],
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
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

          <Typography variant="h6" noWrap>
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
          <SearchInput />
          <Box>
            <IconButton aria-label="theme">
              {currentTheme === THEME_COLORS.LIGHT ? (
                <NightIcon
                  onClick={() => handleSwitchDarkMode(THEME_COLORS.DARK)}
                />
              ) : (
                <DayIcon
                  onClick={() => handleSwitchDarkMode(THEME_COLORS.LIGHT)}
                />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* search output */}
      <SearchOutput movies={searchData} />
      <SimpleDrawer open={open} handleDrawerClose={handleDrawerClose} />
      {/* TODO: */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        mb content here...
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
