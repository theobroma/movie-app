import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    height: '100%',
    width: theme.spacing(7),
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'inherit',
    paddingLeft: theme.spacing(7),
    padding: 4,
    transition: theme.transitions.create('background'),
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    '&:focus, &:hover': {
      background: 'rgba(0, 0, 0, 0.065)',
    },
    '&:focus': {
      minWidth: 400,
    },
  },
}));
