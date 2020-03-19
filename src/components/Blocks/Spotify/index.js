import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { Square } from '../Templates';
import styles from './styles.module.scss';

const Spotify = () => {
  const [payload, setPayload] = useState({});

  useEffect(() => {
    fetch('https://spotify-suggest.now.sh/api/playback/gvjacob')
      .then(res => res.json())
      .then(setPayload);
  });

  const { name, artist, image, isPlaying } = payload;

  if (isEmpty(image)) {
    return null;
  }

  const status = isPlaying ? 'Listening to' : 'Recently listened to';

  return (
    <Square className={styles.spotify}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.metadata}>
        <span>{status}</span>
        <h2 className={styles.trackName}>{name}</h2>
        <p className={styles.trackArtist}>{artist}</p>
      </div>
    </Square>
  );
};

export default Spotify;
