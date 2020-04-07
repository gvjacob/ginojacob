import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { classNames as cn } from 'peculiarity';

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

  return (
    <aside className={cn(styles.column, className)}>
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
