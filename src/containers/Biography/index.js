import React from 'react';
import { safeGet, classNames as cn } from 'peculiarity';

import { Link } from '../../components';

import styles from './styles.module.scss';

const Biography = ({ className, biography }) => {
  const { name, biography: bio, experience } = safeGet(
    biography,
    'name',
    'biography',
    'experience',
  );

  const { title, name: organization, website } = safeGet(
    experience,
    'title',
    ['organization', 'name'],
    ['organization', 'website'],
  );

  return (
    <section className={cn(styles.biography, className)}>
      <div className={styles.grid}>
        <h1 className={styles.name}>{name}</h1>
        <span className={styles.title}>{title} at</span>
        <h2 className={styles.organization}>
          <Link to={website}>{organization}</Link>
        </h2>
      </div>
      <p className={styles.bio}>{bio}</p>
    </section>
  );
};

export default Biography;
