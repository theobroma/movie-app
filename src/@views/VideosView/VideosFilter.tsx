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
import { nanoid } from '@reduxjs/toolkit';

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
  handleClick: any;
}

const VideosFilter = ({ groupedVideos, handleClick }: Props) => {
  const classes = useStyles();

  const FilterBlock = Object.keys(groupedVideos).map((key) => {
    return (
      <ListItem onClick={(e) => handleClick(key)} key={nanoid()}>
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
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List>{FilterBlock}</List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideosFilter;
