import React from 'react';
import cn from 'classnames';

import css from './styles.css';

/**
 * Show Spotify activity, either
 * currently playing or last played track.
 */
const SpotifyActivity = ({ className }) => {
  return (
    <div className={cn(css.spotifyActivity, className)}>
      <i className={cn('fas fa-volume-up', css.speaker)} />
      <div className={css.track}>California Dreamin'</div>
      <div className={css.artist}>Joseé Feliciano</div>
      <div className={css.recommend}>Recommend</div>
    </div>
  );
};

export default SpotifyActivity;
