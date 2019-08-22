import React from 'react';
import cn from 'classnames';

import Block from '../Block';
import styles from './styles.css';

const Project = ({ className, content }) => {
  const { title, subtitle, description } = content;

  return (
    <div className={cn(styles.project, className)}>
      <Block title={title} subtitle={subtitle} description={description} />
    </div>
  );
};

export default Project;
