import React from 'react';

import Carousel from '../Carousel';
import Image from '../Image';

const ProjectsCarousel = ({ className, projects }) => {
  const items = projects.map(({ name, media }) => ({ media, content: <p>{name}</p> }));

  return <Carousel className={className} items={items} />;
};

export default ProjectsCarousel;
