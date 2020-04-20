import React from 'react';
import { safeGet, classNames as cn } from 'peculiarity';

import { Link, Highlight, FAResources } from '../';

import styles from './styles.module.scss';

const Biography = ({ className, biography }) => {
  const { name, biography: bio, experience, resources } = safeGet(
    biography,
    'name',
    'biography',
    'experience',
    'resources',
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
        <FAResources className={styles.resources} resources={resources} />
      </div>
      <Highlight className={styles.bio}>
        <p>{bio}</p>
      </Highlight>
    </section>
  );
};

export default Biography;
