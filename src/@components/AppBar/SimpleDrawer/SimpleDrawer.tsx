import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MovieIcon from '@material-ui/icons/Movie';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from './SimpleDrawer.styles';
import ListItemLink from './ListItemLink';
import { ROUTES } from '../../../@types';

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
        <ListItemLink primary="Home" to={ROUTES.ROOT} icon={<MovieIcon />} />
        <ListItemLink
          primary="Favourites"
          to={ROUTES.FAVOURITES_MOVIES}
          icon={<FavoriteIcon />}
        />
        <ListItemLink
          primary="Visited"
          to={ROUTES.VISITED_MOVIES}
          icon={<VisibilityIcon />}
        />
      </List>
      <Divider />
    </Drawer>
  );
};
export default SimpleDrawer;
