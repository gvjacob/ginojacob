import React from 'react';
import { safeGet } from 'peculiarity';

import { Image, Link } from '../../components';
import styles from './styles.module.scss';

const Experience = ({ experience }) => {
  const { title, name, website } = safeGet(
    experience,
    'title',
    ['organization', 'name'],
    ['organization', 'website'],
  );

  return (
    <p>
      {title} at <Link to={website}>{name}</Link>
    </p>
  );
};

const Hero = ({ name, tagline, avatar, experience }) => (
  <section className={styles.hero}>
    <Image className={styles.avatar} image={avatar} />
    <span className={styles.line} />
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.tagline}>{tagline}</p>
    <Experience experience={experience} />
  </section>
);

export default Hero;
