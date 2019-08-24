import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.css';

const Navigation = ({ className, tabs, currentIndex = 0, setCurrentIndex }) => {
  return (
    <div className={cn(className, styles.navigation)}>
      {tabs.map((tab, index) => (
        <button
          className={cn(styles.tab, {
            [styles.selected]: currentIndex === index,
          })}
          onClick={() => setCurrentIndex(index)}
          key={index}
        >
          <h3>{tab}</h3>
        </button>
      ))}
    </div>
  );
};

export default Navigation;
