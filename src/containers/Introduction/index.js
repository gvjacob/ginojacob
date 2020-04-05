import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Image } from '../../components';
import styles from './styles.module.scss';

const Introduction = () => {
  const { biography } = useStaticQuery(graphql`
    {
      biography: contentfulBiography {
        name
        biographyTease
        media {
          ...IMAGE
        }
      }
    }
  `);

  const { name, biographyTease, media } = biography;

  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <Image className={styles.media} image={media} />
        <p className={styles.biography}>{biographyTease}</p>
      </div>
    </section>
  );
};

export default Introduction;
