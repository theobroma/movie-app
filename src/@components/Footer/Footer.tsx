import React from 'react';
import {
  makeStyles,
  createStyles,
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
      copyright: {
        textAlign: 'center',
        marginBottom: 0,
        fontSize: 16,
      },
    }),
  };
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar style={{ padding: 0 }}>
          <Typography className={classes.copyright} variant="h6" noWrap>
            © created by Aleksandr Siryi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
