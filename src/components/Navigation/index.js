import React from 'react';
import cn from 'classnames';
import { useQuery } from 'responsive-jsx';

import styles from './styles.css';

const Navigation = ({ className, tabs, currentIndex = 0, setCurrentIndex }) => {
  const showTitle = useQuery('(min-width: 520px)');

  return (
    <div className={cn(className, styles.navigation)}>
      {tabs.map(({ title, icon }, index) => (
        <button
          className={cn(styles.tab, {
            [styles.selected]: currentIndex === index,
          })}
          onClick={() => setCurrentIndex(index)}
          key={index}
        >
          <img className={styles.icon} src={icon}></img>
          {showTitle && <h3 className={styles.title}>{title}</h3>}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
