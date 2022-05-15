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
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React from 'react';
import { Trans } from 'react-i18next';
import { ROUTES } from '../../../@types';
import ListItemLink from './ListItemLink';

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
  const [open3, setOpen3] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItemLink
        // primary="Home"
        primary={<Trans i18nKey="Home" />}
        to={ROUTES.ROOT}
        icon={<HomeIcon />}
      />
      {/* 1 Trending */}
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText
          // primary="Trending"
          primary={<Trans i18nKey="Trending" />}
        />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            // primary="Movies"
            primary={<Trans i18nKey="Movies" />}
            to={ROUTES.TRENDING_MOVIES}
            icon={<MovieIcon />}
            className={classes.nested}
          />
          <ListItemLink
            // primary="TV Shows"
            primary={<Trans i18nKey="TVShows" />}
            to={ROUTES.TRENDING_TV}
            icon={<TvIcon />}
            className={classes.nested}
          />
        </List>
      </Collapse>
      {/* 2 Favourites */}
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText
          //  primary="Favourites"
          primary={<Trans i18nKey="Favourites" />}
        />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            // primary="Movies"
            primary={<Trans i18nKey="Movies" />}
            to={ROUTES.FAVOURITES_MOVIES}
            icon={<MovieIcon />}
            className={classes.nested}
          />
          <ListItemLink
            // primary="TV Shows"
            primary={<Trans i18nKey="TVShows" />}
            to={ROUTES.FAVOURITES_TV}
            icon={<TvIcon />}
            className={classes.nested}
          />
        </List>
      </Collapse>
      {/* 3 Visited */}
      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText
          //  primary="Visited"
          primary={<Trans i18nKey="Visited" />}
        />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            // primary="Movies"
            primary={<Trans i18nKey="Movies" />}
            to={ROUTES.VISITED_MOVIES}
            icon={<MovieIcon />}
            className={classes.nested}
          />
          <ListItemLink
            // primary="TV Shows"
            primary={<Trans i18nKey="TVShows" />}
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
