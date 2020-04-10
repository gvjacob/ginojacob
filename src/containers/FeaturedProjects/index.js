import React from 'react';

import { Image } from '../../components';
import styles from './styles.module.scss';

const Project = ({ className, project }) => {
  const { name, description, link, github, media } = project;

  return (
    <section>
      <Image className={styles.image} image={media} fit />
    </section>
  );
};

const FeaturedProjects = ({ className, projects }) => {
  return (
    <section>
      <Project project={projects[0]} />
    </section>
  );
};

export default FeaturedProjects;
