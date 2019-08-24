import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const Tags = ({ className, tags }) => {
  const dot = ' • ';

  return (
    <div className={cn(styles.tags, className)}>
      {tags.map((tag) => (
        <div className={styles.tag}>{` ${tag}`}</div>
      ))}
    </div>
  );
};

export default Tags;
