import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Grid } from '../../components';
import Biography from '../Biography';

import styles from './styles.module.scss';

const Index = () => {
  const { homepage } = useStaticQuery(graphql`
    {
      homepage: contentfulHomepage {
        biography {
          name
          biography
          experience {
            title
            organization {
              name
              website
            }
          }
          resources {
            name
            fontAwesomeClass
            link
          }
        }
        featuredProject {
          ...PROJECT
        }
        archive {
          ...PROJECT
        }
      }
    }
  `);

  const { biography } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Grid className={styles.grid} />
      <Biography className={styles.biography} biography={biography} />
    </div>
  );
};

export default Index;
