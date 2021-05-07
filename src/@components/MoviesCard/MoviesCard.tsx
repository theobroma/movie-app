import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Share from '@material-ui/icons/ShareOutlined';
import PlayArrow from '@material-ui/icons/PlayArrowOutlined';
import Info from '@material-ui/icons/InfoOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';

import genresData from './genresData';

interface Props {
  movies: any;
}

const MoviesCard: React.FC<Props> = (props: any) => {
  const [opened, setOpen] = useState(false);

  const ResponsiveDialog = withMobileDialog({ breakpoint: 'xs' })(Dialog);
  const { movies } = props;
  const poster = `https://image.tmdb.org/t/p/w500/${movies.poster_path}`;

  const styles = {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: '8px',
      boxShadow: '10px 10px 34px -6px rgba(0,0,0,0.75)',
    },

    card: {
      backgroundColor: 'firebrick' /* firebrick, crimson, indianred */,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      gridGap: '4px',
      minHeight: 550,
      backgroundImage: `url(${poster})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },

    body: {
      alignSelf: 'center',
      textAlign: 'center',
    },

    actions: {
      backgroundColor: 'whitesmoke',
      display: 'flex',
      justifyContent: 'space-between',
      textDecoration: 'none',
      color: 'black',
      borderTop: '1px solid #D1D0CE',
    },
  };

  // const rate = movies.vote_average;
  // const backPoster = `https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`;
  const currentMovieGenre = movies.genre_ids;
  const { genres } = genresData;

  const namesGenre = genres.filter((genre: any) =>
    movies.genre_ids.includes(genre.id),
  );

  return (
    <div style={styles.root}>
      <Paper style={styles.card}>
        {/* <div style={styles.body}>
          <Typography variant="h3">{movies.title}</Typography>
        </div> */}
        <div className="buttons">
          {/* <Button
            color="inherit"
            size="small"
            // href={`https://720p-izle.com/izle/altyazi/${movies?.title
            //   .split(' ')
            //   .join('-')
            //   .toLowerCase()}.html`}
            // target="_blank"
          >
            button
            <PlayArrow />
          </Button> */}
          <Button color="inherit" size="large" onClick={() => setOpen(true)}>
            <Info />
          </Button>
          <ResponsiveDialog open={opened} onClose={() => setOpen(false)}>
            <DialogTitle>
              {movies.title}{' '}
              {movies.original_title !== movies.title ? (
                <strong style={{ fontSize: 12, display: 'block' }}>
                  {movies.original_title}
                </strong>
              ) : null}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{movies.overview}</DialogContentText>
            </DialogContent>
            {/* <DialogContent>
              <DialogContentText>
                {namesGenre.map((genre: any) => (
                  <span>{genre.name} </span>
                ))}
                <Divider />
                {movies.popularity}
                <Divider />
                {movies.vote_average}
                <Divider />
                {movies.original_language.toUpperCase()}
              </DialogContentText>
            </DialogContent> */}
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </ResponsiveDialog>
          {/* <Button color="inherit" size="large">
            <Share />
          </Button> */}
        </div>
      </Paper>
    </div>
  );
};

export default MoviesCard;
