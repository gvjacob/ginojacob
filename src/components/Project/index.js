import React from 'react';
import cn from 'classnames';
import StackGrid from 'react-stack-grid';

import Block from '../Block';
import styles from './styles.css';

const Project = ({ className, content }) => {
  const { title, subtitle, description, images = [] } = content;

  return (
    <div className={cn(styles.project, className)}>
      <Block title={title} subtitle={subtitle} description={description} />
    </div>
  );
};

export default Project;
