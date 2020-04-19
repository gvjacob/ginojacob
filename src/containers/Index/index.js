import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Grid } from '../../components';
import styles from './styles.module.scss';

const Index = () => {
  const { homepage } = useStaticQuery(graphql`
    {
      homepage: contentfulHomepage {
        biography {
          name
          biographyTease
          media {
            ...IMAGE
          }
        }
        experiences {
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
            ...PROJECT
          }
        }
        featuredProjects {
          ...PROJECT
        }
        projects {
          ...PROJECT
        }
      }
    }
  `);

  const { biography, experiences, featuredProjects, projects } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Grid className={styles.grid} />
    </div>
  );
};

export default Index;
