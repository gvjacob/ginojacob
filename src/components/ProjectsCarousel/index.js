import React from 'react';
import produce from 'immer';

import Carousel from '../Carousel';
import { addQueryParams } from '../../utils';
import styles from './styles.module.scss';

const addQueryParamsToMedia = media =>
  produce(media, draft => {
    draft.file.url = addQueryParams(draft.file.url, { w: 1920, h: 1080, fit: 'fill' });
  });

const ProjectsCarousel = ({ className, projects }) => {
  const items = projects.map(({ name, link, media }) => ({
    media: addQueryParamsToMedia(media),
    link,
    content: <span className={styles.name}>{name}</span>,
  }));

  return <Carousel className={className} items={items} />;
};

export default ProjectsCarousel;
