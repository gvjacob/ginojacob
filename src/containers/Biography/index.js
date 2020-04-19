import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Biography = ({ className, biography }) => {
  const { name, biography: bio, experience } = biography;
  const {
    title,
    organization: { name: organization },
  } = experience;

  return (
    <section className={cn(styles.biography, className)}>
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.title}>{title} at</span>
      <h2 className={styles.organization}>{organization}</h2>
      <p className={styles.bio}>{bio}</p>
    </section>
  );
};

export default Biography;
