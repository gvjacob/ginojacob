import React, { useState } from 'react';
import cn from 'classnames';
import StackGrid from 'react-stack-grid';

import Block from '../Block';
import styles from './styles.css';

const Project = ({ className, project }) => {
  const {
    title,
    subtitle,
    description,
    images = [],
    shadow = false,
    link,
    tags,
  } = project;
  const columnWidth = Math.floor(100 / Math.min(4, images.length));
  const [loadedCount, setLoadedCount] = useState(0);

  return (
    <div className={cn(styles.project, className)}>
      {images.length > 0 && (
        <StackGrid
          className={cn({
            [styles.hideStackGrid]: loadedCount !== images.length,
          })}
          columnWidth={`${columnWidth}%`}
          monitorImagesLoaded
        >
          {images.map((image, index) => (
            <img
              key={index}
              className={cn(styles.image, { [styles.shadow]: shadow })}
              src={image}
              onLoad={() => setLoadedCount(loadedCount + 1)}
            />
          ))}
        </StackGrid>
      )}
      <Block
        className={styles.block}
        title={title}
        subtitle={subtitle}
        description={description}
        link={link}
        tags={tags}
      />
    </div>
  );
};

export default Project;
