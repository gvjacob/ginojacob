import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import gsap from 'gsap';

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

  const nameRef = useRef(null);
  const mediaRef = useRef(null);
  const biographyRef = useRef(null);

  useEffect(() => {
    const delta = 40;
    const duration = 1;

    gsap.fromTo(nameRef.current, { opacity: 0, x: -delta }, { duration, opacity: 1, x: 0 });
    gsap.fromTo(mediaRef.current, { autoAlpha: 0 }, { duration: 0.5, delay: 0.5, autoAlpha: 1 });
    gsap.fromTo(biographyRef.current, { opacity: 0, x: delta }, { duration, opacity: 1, x: 0 });
  }, []);

  const { name, biographyTease, media } = biography;

  return (
    <section className={styles.introduction}>
      <h1 className={styles.name} ref={nameRef}>
        {name}
      </h1>
      <Image className={styles.media} image={media} ref={mediaRef} />
      <p className={styles.biography} ref={biographyRef}>
        {biographyTease}
      </p>
    </section>
  );
};

export default Introduction;
