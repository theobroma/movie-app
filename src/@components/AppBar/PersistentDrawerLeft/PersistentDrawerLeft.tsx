import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import AppSearch from '../AppSearch';
import Badges from '../Badges';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import NestedList from '../NestedList';
import ThemeSwitch from '../ThemeSwitch';

import { useStyles } from './PersistentDrawerLeft.styles';

const PersistentDrawerLeft: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx({
        [classes.root]: true,
        'HolyGrail-content': true,
      })}
    >
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
          <Link
            to={{ pathname: '/' }}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Typography variant="h6" noWrap>
              MovieDB App
            </Typography>
          </Link>
          <div className={classes.grow} />
          <Badges />
          <IconButton
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <ThemeSwitch />
          <LanguageMenu />
        </Toolbar>
        {showMobileSearch && <AppSearch />}
      </AppBar>
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <NestedList />
      </Drawer>
      {/* Main */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default PersistentDrawerLeft;
