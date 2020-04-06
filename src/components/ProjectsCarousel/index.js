import React from 'react';

import Carousel from '../Carousel';
import styles from './styles.module.scss';

const ProjectsCarousel = ({ className, projects }) => {
  const items = projects.map(({ name, link, media }) => ({
    media,
    link,
    content: <span className={styles.name}>{name}</span>,
  }));

  return <Carousel className={className} items={items} />;
};

export default ProjectsCarousel;
