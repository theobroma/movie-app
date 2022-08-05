// https://stackoverflow.com/questions/62036213/how-to-put-routerlink-in-iconbutton-in-reactjs
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { useAppSelector } from '../../../@store/configureStore';
import {
  favouriteCountSelector,
  visitedCountSelector,
} from '../../../@store/user/selectors';
import { ROUTES } from '../../../@types';

import { useStyles } from './Badges.style';

const Badges = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const favouriteCount = useAppSelector(favouriteCountSelector);
  const visitedCount = useAppSelector(visitedCountSelector);

  return (
    <>
      <div className={classes.sectionDesktop}>
        <Tooltip title="Navigate to favourites">
          <IconButton
            aria-label="show favourites"
            color="inherit"
            onClick={() => navigate(ROUTES.FAVOURITES_MOVIES)}
          >
            <Badge
              badgeContent={favouriteCount}
              color="secondary"
              overlap="rectangular"
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
            <Badge
              badgeContent={visitedCount}
              color="secondary"
              overlap="rectangular"
            >
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
