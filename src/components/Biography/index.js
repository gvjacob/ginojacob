import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { safeGet, classNames as cn } from 'peculiarity';

import { Link, Highlight, FAResources } from '../';

import styles from './styles.module.scss';

const Biography = ({ className, biography }, ref) => {
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

  const [showBio, setShowBio] = useState(true);

  useImperativeHandle(ref, () => ({
    setShowBio,
  }));

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
      <Highlight className={cn(styles.bio, showBio && styles.show)}>
        <p>{bio}</p>
      </Highlight>
    </section>
  );
};

export default forwardRef(Biography);
