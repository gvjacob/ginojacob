import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const Tags = ({ className, tags }) => {
  return (
    <div className={cn(styles.tags, className)}>
      {tags.map((tag, index) => (
        <div className={styles.tag} key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
