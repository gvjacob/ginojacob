import React, { useState, useRef } from 'react';
import { classNames as cn } from 'peculiarity';
import { useIntersection } from 'react-use';

import { Image, Highlight, Link } from '..';
import styles from './styles.module.scss';

const FeaturedProject = ({ className, project, bioRef }) => {
  const { name, description, link, media } = project;
  const imageRef = useRef();
  const [tinted, setTinted] = useState(true);

  const intersection = useIntersection(imageRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  });

  if (
    intersection &&
    intersection.isIntersecting === tinted &&
    intersection.boundingClientRect.y > 0
  ) {
    setTinted(!tinted);
    bioRef.current.setShowBio(!tinted);
  }

  return (
    <figure className={cn(styles.featuredProject, className)}>
      <div className={cn(styles.image, tinted && styles.tinted)} ref={imageRef}>
        <Image image={media} fit />
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
