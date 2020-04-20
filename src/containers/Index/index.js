import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Grid, Biography, FeaturedProject } from '../../components';

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

  const { biography, featuredProject } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Biography className={styles.biography} biography={biography} />
      <FeaturedProject className={styles.featuredProject} project={featuredProject} />
      <Grid className={styles.grid} />
    </div>
  );
};

export default Index;
