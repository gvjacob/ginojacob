import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Image, Highlight, Link } from '..';
import styles from './styles.module.scss';

const FeaturedProject = ({ className, project }) => {
  const { name, description, link, media } = project;

  return (
    <figure className={cn(styles.featuredProject, className)}>
      <div className={styles.image}>
        <Image image={media} />
      </div>

      <figcaption className={styles.caption}>
        <h2 className={styles.name}>
          <Link to={link}>{name}</Link>
        </h2>
        <Highlight className={styles.description}>
          <p>{description}</p>
        </Highlight>
      </figcaption>
    </figure>
  );
};

export default FeaturedProject;
