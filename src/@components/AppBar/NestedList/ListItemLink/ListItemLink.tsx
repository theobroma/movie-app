import React from 'react';
import type { NavLinkProps } from 'react-router-dom';
import {
  // Link as RouterLink,
  // LinkProps as RouterLinkProps,
  NavLink as RouterLink,
} from 'react-router-dom';

import type { Theme } from '@material-ui/core';
import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string | JSX.Element; // cause i18n like <Trans i18nKey="Movies" />
  to: string;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Applied when "associated page" is selected
    linkActiveClass: {
      '&.active': {
        color: theme.palette.secondary.main,
        '& .MuiSvgIcon-root': {
          color: theme.palette.secondary.main,
        },
      },
    },
  }),
);

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to, className } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      /* eslint-disable react/no-unstable-nested-components */
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        },
      ),
    /* eslint-enable */
    [to],
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        className={`${classes.linkActiveClass} ${className}`}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.whyDidYouRender = true;

export default ListItemLink;
