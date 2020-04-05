import React from 'react';
import { compact } from 'lodash';

import styles from './styles.module.scss';

const Experience = ({ className, title, duration, description, organization }) => {
  const { name: organizationName, description: organizationDescription } = organization;

  const overline = compact([title, duration]).join(' | ');

  return (
    <section className={className}>
      <span className={styles.overline}>{overline}</span>
      <h2 className={styles.organization}>{organizationName}</h2>
      <p className={styles.description}>{description || organizationDescription}</p>
    </section>
  );
};

export default Experience;
