import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import {
  // Link as RouterLink,
  // LinkProps as RouterLinkProps,
  NavLink as RouterLink,
  NavLinkProps,
} from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const useStyles = makeStyles((theme: Theme) =>
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
  const { icon, primary, to } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        },
      ),
    [to],
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        className={classes.linkActiveClass}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
