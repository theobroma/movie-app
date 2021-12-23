import { Box } from '@material-ui/core';
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
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useDebounce from '../../../@hooks/useDebounce';
import { searchDataSelector } from '../../../@store/search/selectors';
import { searchTC } from '../../../@store/search/slice';
import NestedList from '../NestedList';
import SearchInput from '../Search/SearchInput';
import SearchOutput from '../Search/SearchOutput';
import ThemeSwitch from '../ThemeSwitch';
import { useStyles } from './PersistentDrawerLeft.styles';

const PersistentDrawerLeft: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const searchDataResults = useSelector(searchDataSelector).results;
  const [open, setOpen] = useState(false);
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
          <IconButton
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            // style={{ marginLeft: 'auto' }}
          >
            <SearchIcon />
          </IconButton>
          <ThemeSwitch />
        </Toolbar>
        {/* search input */}
        <Box>
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
          {/* search output */}
          {searchVal && showMobileSearch && (
            <SearchOutput movies={searchDataResults} />
          )}
        </Box>
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
