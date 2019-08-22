import React from 'react';

import { developer } from '../../content';
import Project from '../../components/Project';
import styles from './styles.css';

const Designer = ({ className }) => {
  return (
    <div className={className}>
      {developer.map((project) => (
        <Project className={styles.project} content={project} />
      ))}
    </div>
  );
};

export default Designer;
