import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { ROUTES } from '../../../@types';
import ListItemLink from '../SimpleDrawer/ListItemLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const NestedList = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItemLink primary="Home" to={ROUTES.ROOT} icon={<HomeIcon />} />
      {/* 1 Favourites */}
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favourites" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            primary="Movies"
            to={ROUTES.FAVOURITES_MOVIES}
            icon={<MovieIcon />}
            className={classes.nested}
          />
          <ListItemLink
            primary="TV Shows"
            to={ROUTES.FAVOURITES_TV}
            icon={<TvIcon />}
            className={classes.nested}
          />
        </List>
      </Collapse>
      {/* 2 Visited */}
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="Visited" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            primary="Movies"
            to={ROUTES.VISITED_MOVIES}
            icon={<MovieIcon />}
            className={classes.nested}
          />
          <ListItemLink
            primary="TV Shows"
            to={ROUTES.VISITED_TV}
            icon={<TvIcon />}
            className={classes.nested}
          />
        </List>
      </Collapse>
    </List>
  );
};

export default NestedList;
