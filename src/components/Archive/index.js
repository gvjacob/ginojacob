import React from 'react';
import { classNames as cn } from 'peculiarity';

import { Link } from '..';

import styles from './styles.module.scss';

const Archive = ({ className, projects }) => {
  return (
    <section classNames={cn(styles.archive, className)}>
      <h2 className={styles.headline}>Archive</h2>
      <ul className={styles.projects}>
        {projects.map(({ name, description, link }, i) => (
          <Link to={link} key={i}>
            <li className={styles.project}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.description}>{description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Archive;
