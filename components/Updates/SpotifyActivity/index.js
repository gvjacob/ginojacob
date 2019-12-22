import React from 'react';
import cn from 'classnames';
import UpdateRow from '../UpdateRow';

import css from './styles.css';

/**
 * Show Spotify activity in <UpdateRow>, either
 * currently playing or last played track.
 */
const SpotifyActivity = ({ className }) => {
  const story = (
    <div className={cn(css.spotifyActivity, className)}>
      <div>Listening to</div>
      <div className={css.track}>California Dreamin' by Joseé Feliciano</div>
      <div className={css.recommend}>Recommend a tune!</div>
    </div>
  );

  return <UpdateRow story={story} />;
};

export default SpotifyActivity;
