import React, { useCallback } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './AppBar.styles';
import SimpleDrawer from './SimpleDrawer';
import SearchInput from './Search/SearchInput';
import { setThemeAC } from '../../@store/ui/slice';
import { ThemeColorsType, THEME_COLORS } from '../../@types';
import { themeSelector } from '../../@store/ui/selectors';

export default function CustomAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTheme = useSelector(themeSelector);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
              {currentTheme === THEME_COLORS.DARK ? (
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
