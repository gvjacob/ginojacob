import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const Block = ({ className, title, subtitle, description }) => {
  return (
    <div className={className}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.subtitle}>{subtitle}</span>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Block;
