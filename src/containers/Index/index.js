import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Grid, Archive, Biography, FeaturedProject, Footer } from '../../components';

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

  const { biography, featuredProject, archive } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Grid className={styles.grid} />
      <Biography className={styles.biography} biography={biography} />
      <FeaturedProject className={styles.featuredProject} project={featuredProject} />
      <Archive projects={archive} />
      <Footer className={styles.footer} resources={biography.resources} />
    </div>
  );
};

export default Index;
