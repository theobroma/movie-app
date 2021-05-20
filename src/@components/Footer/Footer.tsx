import React from 'react';
import {
  makeStyles,
  createStyles,
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        <Toolbar
          style={{
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography className={classes.copyright} variant="h6" noWrap>
              © created by Aleksandr Siryi
            </Typography>
          </Box>
          <Box>
            <IconButton
              color="inherit"
              href="https://github.com/theobroma/movie-app"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
