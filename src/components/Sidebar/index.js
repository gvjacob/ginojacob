import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import Navigation from '../Navigation';
import JumpTo from '../JumpTo';
import Social from '../Social';
import css from './styles.css';

/**
 * Sidebar containing <Navigation> and <Social>
 */
const Sidebar = ({ className }) => {
  return (
    <div className={cn(css.sidebar, className)}>
      <Navigation className={css.navigation} />
      <JumpTo className={css.jumpTo} />
      <Social className={css.social} />
    </div>
  );
};

export default Sidebar;
