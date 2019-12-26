import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import Navigation from '../Navigation';
import SpotifyActivity from '../SpotifyActivity';
import Social from '../Social';
import css from './styles.css';

/**
 * Sidebar containing <Navigation> and <Social>
 */
const Sidebar = ({ className, observable }) => {
  return (
    <div className={cn(css.sidebar, className)}>
      <Navigation className={css.navigation} />
      {/*<SpotifyActivity className={css.spotify} /> */}
      <Social className={css.social} />
    </div>
  );
};

export default Sidebar;
