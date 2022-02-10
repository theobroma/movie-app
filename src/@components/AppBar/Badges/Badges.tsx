// https://stackoverflow.com/questions/62036213/how-to-put-routerlink-in-iconbutton-in-reactjs
import { Tooltip } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  favouriteCountSelector,
  visitedCountSelector,
} from '../../../@store/user/selectors';
import { ROUTES } from '../../../@types';
import { useStyles } from './Badges.style';

const Badges = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const favouriteCount = useSelector(favouriteCountSelector);
  const visitedCount = useSelector(visitedCountSelector);

  return (
    <>
      <div className={classes.sectionDesktop}>
        <Tooltip title="Navigate to favourites">
          <IconButton aria-label="show favourites" color="inherit">
            <Badge
              badgeContent={favouriteCount}
              color="secondary"
              onClick={() => navigate(ROUTES.FAVOURITES_MOVIES)}
            >
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Navigate to visited">
          <IconButton
            aria-label="show visited"
            color="inherit"
            onClick={() => navigate(ROUTES.VISITED_MOVIES)}
          >
            <Badge badgeContent={visitedCount} color="secondary">
              <VisibilityIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </div>
      {/* <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div> */}
    </>
  );
};

export default Badges;