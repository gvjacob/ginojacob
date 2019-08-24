import React from 'react';
import cn from 'classnames';
import StackGrid from 'react-stack-grid';

import Block from '../Block';
import styles from './styles.css';

const Project = ({ className, project }) => {
  const { title, subtitle, description, images = [] } = project;
  const columnWidth = Math.floor(100 / Math.min(4, images.length));

  return (
    <div className={cn(styles.project, className)}>
      {images.length > 0 && (
        <StackGrid columnWidth={`${columnWidth}%`} monitorImagesLoaded>
          {images.map((image) => (
            <img className={styles.image} src={image} />
          ))}
        </StackGrid>
      )}
      <Block
        className={styles.block}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
};

export default Project;
