import React from 'react';
import { classNames as cn } from 'peculiarity';
import { useStaticQuery, graphql } from 'gatsby';

import { Experience } from '../../components';
import { serializeEdges } from '../../utils';

import styles from './styles.module.scss';

const Experiences = ({ className }) => {
  const { experiences } = useStaticQuery(graphql`
    {
      experiences: allContentfulExperience {
        edges {
          node {
            title
            duration
            description
            current
            organization {
              name
              description
              website
            }
            projects {
              name
              link
              media {
                ...IMAGE
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className={cn(styles.experiences, className)}>
      {serializeEdges(experiences).map((experience, i) => (
        <Experience className={styles.experience} {...experience} key={i} />
      ))}
    </section>
  );
};

export default Experiences;
