import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      root: {
        position: 'fixed',
        maxHeight: 400,
        width: '100%',
        overflowY: 'auto',
        background: 'white',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.22)',
        zIndex: 2,
      },
      item: {
        height: 60,
        padding: theme.spacing(1),
        paddingLeft: 20,

        [theme.breakpoints.down('sm')]: {
          height: 90,
        },
      },
      itemImage: {
        height: '100%',
        borderRadius: 4,
        // overflow: 'hidden',
        // flexShrink: 0,
      },
      itemInfo: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      vote: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
        height: '100%',
        fontWeight: 'bold',
        fontSize: '12pt',
      },
    }),
  };
});
