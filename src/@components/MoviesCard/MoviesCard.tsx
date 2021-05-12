import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { getScoreColor } from '../../@utils/score-color';
import { Formatter } from '../../@utils/formatter';
import { useStyles } from './MoviesCard.styles';

interface Props {
  movie: any;
}

const MoviesCard: React.FC<Props> = ({
  movie: { id, title, poster_path, release_date, vote_average },
}) => {
  const classes = useStyles();
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const color = getScoreColor(vote_average);

  const vote = vote_average > 0 ? vote_average : '-';

  return (
    <div className={classes.root}>
      <Link to={{ pathname: `movies/${id}` }}>
        <Paper className={classes.card}>
          <img
            // src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noCover}
            src={poster}
            alt={title}
            className={classes.poster}
          />
          <div className={classes.details}>
            <Typography component="h4" className={classes.movieName}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.score}
              style={{ backgroundColor: color }}
            >
              {vote}
            </Typography>
            <Typography variant="body1" className={classes.extraInfo}>
              {release_date && Formatter.formatDate(release_date)}
            </Typography>
          </div>
        </Paper>
      </Link>
    </div>
  );
};

export default MoviesCard;
