import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStyles } from './AppBar.styles';
import SimpleDrawer from './SimpleDrawer';
import SearchInput from './Search/SearchInput';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
