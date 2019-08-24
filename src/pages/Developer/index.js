import React from 'react';

import { developer } from '../../content';
import Project from '../../components/Project';
import styles from './styles.css';

const Developer = ({ className }) => {
  return (
    <div className={className}>
      {developer.map((project, index) => (
        <Project className={styles.project} project={project} key={index} />
      ))}
    </div>
  );
};

export default Developer;
