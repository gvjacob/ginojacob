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
      <div className={styles.resources}>
        {resources.map((resource, i) => (
          <FALink className={styles.resource} {...resource} key={i} />
        ))}
      </div>
    </aside>
  );
};

export default Column;
