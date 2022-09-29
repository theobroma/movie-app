import React from 'react';

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import type { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);
interface Props {
  groupedVideos: any;
}

const VideosFilter = ({ groupedVideos }: Props) => {
  const classes = useStyles();

  const FilterBlock = Object.keys(groupedVideos).map((key) => {
    return (
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{/* <FolderIcon /> */}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={groupedVideos[key][0].type}
            // secondary={secondary ? 'Secondary text' : null}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              {/* <DeleteIcon /> */}
              {groupedVideos[key].length}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>{FilterBlock}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideosFilter;
