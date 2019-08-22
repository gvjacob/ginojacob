import React from 'react';

import { designer } from '../../content';
import Project from '../../components/Project';
import styles from './styles.css';

const Designer = ({ className }) => {
  return (
    <div className={className}>
      {designer.map((project) => (
        <Project className={styles.project} content={project} />
      ))}
    </div>
  );
};

export default Designer;
