import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
import { Link, NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyles } from './SimpleDrawer.styles';

interface Props {
  open: boolean;
  handleDrawerClose: any;
}

const SimpleDrawer: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {/* Icon */}
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
      <List>
        {/* 1 */}
        <ListItem
          button
          key="HomePage"
          exact
          component={NavLink}
          to="/"
          activeClassName="activeclass"
        >
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItem>
        {/* 2 */}
        {/* <ListItem
          button
          key="MoviesDetails"
          exact
          component={NavLink}
          to="/movies/1"
          activeClassName="activeclass"
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="/movies/1" />
        </ListItem> */}
        {/* 3 */}
        <ListItem
          button
          key="FavouritesPage"
          exact
          component={NavLink}
          to="/favourites"
          activeClassName="activeclass"
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="FavouritesPage" />
        </ListItem>
        {/* 4 */}
        <ListItem
          button
          key="VisitedPage"
          exact
          component={NavLink}
          to="/visited"
          activeClassName="activeclass"
        >
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary="VisitedPage" />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SimpleDrawer;
