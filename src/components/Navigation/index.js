import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.css';

/**
 * Navigation tabs.
 */
const Navigation = ({ tabs, currentIndex = 0, setCurrentIndex }) => {
  return (
    <div className={styles.navigation}>
      {tabs.map((tab, index) => (
        <button
          className={cn(styles.tab, {
            [styles.selected]: currentIndex === index,
          })}
          onClick={() => setCurrentIndex(index)}
        >
          <h3>{tab}</h3>
        </button>
      ))}
    </div>
  );
};

export default Navigation;
