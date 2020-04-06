import React from 'react';
import { classNames as cn } from 'peculiarity';
import { compact } from 'lodash';

import ProjectsCarousel from '../ProjectsCarousel';
import styles from './styles.module.scss';

const Experience = ({ className, title, duration, description, organization, projects }) => {
  const { name: organizationName, description: organizationDescription } = organization;

  const overline = compact([title, duration]).join(' | ');

  return (
    <section className={cn(styles.experience, className)}>
      <div>
        <span className={styles.overline}>{overline}</span>
        <h2 className={styles.organization}>{organizationName}</h2>
        <p className={styles.description}>{description || organizationDescription}</p>
      </div>
      <ProjectsCarousel className={styles.projects} projects={projects} />
    </section>
  );
};

export default Experience;
