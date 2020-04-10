import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Experience } from '../../components';
import styles from './styles.module.scss';

const Experiences = ({ className, experiences }) => (
  <section className={cn(styles.experiences, className)}>
    {experiences.map((experience, i) => (
      <Experience className={styles.experience} {...experience} key={i} />
    ))}
  </section>
);

export default Experiences;
