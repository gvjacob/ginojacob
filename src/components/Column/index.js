import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { classNames as cn } from 'peculiarity';
import gsap from 'gsap';

import ThemeSwitch from '../ThemeSwitch';
import FALink from '../FALink';
import styles from './styles.module.scss';

const Column = ({ className }) => {
  const { biography } = useStaticQuery(graphql`
    {
      biography: contentfulBiography {
        resources {
          name
          link
          fontAwesomeClass
        }
      }
    }
  `);

  const { resources } = biography;

  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, delay: 1 });
  }, []);

  return (
    <aside className={cn(styles.column, className)} ref={ref}>
      <ThemeSwitch className={styles.themeSwitch} />
      <ul className={styles.resources}>
        {resources.map((resource, i) => (
          <li className={styles.resource} key={i}>
            <FALink {...resource} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Column;
