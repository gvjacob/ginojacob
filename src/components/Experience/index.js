import React, { useState, useRef } from 'react';
import { classNames as cn } from 'peculiarity';
import { useIntersection } from 'react-use';
import { compact } from 'lodash';
import gsap from 'gsap';

import ProjectsCarousel from '../ProjectsCarousel';
import styles from './styles.module.scss';

const Experience = ({ className, title, duration, description, organization, projects }) => {
  const { name: organizationName, description: organizationDescription } = organization;
  const overline = compact([title, duration]).join(' | ');

  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  if (!animated && intersection && intersection.isIntersecting) {
    gsap.fromTo(ref.current, { opacity: 0, y: 50 }, { opacity: 1, duration: 0.5, y: 0 });
    setAnimated(true);
  }

  return (
    <section className={cn(styles.experience, className)} ref={ref}>
      <div className={styles.container}>
        <span className={styles.overline}>{overline}</span>
        <h2 className={styles.organization}>{organizationName}</h2>
        <p className={styles.description}>{description || organizationDescription}</p>
      </div>
      <ProjectsCarousel className={styles.projects} projects={projects} />
    </section>
  );
};

export default Experience;
