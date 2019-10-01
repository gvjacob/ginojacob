import React from 'react';

import { designer } from '../../content';
import Project from '../../components/Project';
import styles from './styles.css';

const Designer = ({ className }) => {
  return (
    <div className={className}>
      {designer.map((project, index) => (
        <Project key={index} className={styles.project} project={project} />
      ))}
    </div>
  );
};

export default Designer;
