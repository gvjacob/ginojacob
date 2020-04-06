import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Experience } from '../../components';
import { serializeEdges } from '../../utils';

import styles from './styles.module.scss';

const Experiences = () => {
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
    <section className={styles.experiences}>
      {serializeEdges(experiences).map((experience, i) => (
        <Experience className={styles.experience} {...experience} key={i} />
      ))}
    </section>
  );
};

export default Experiences;
