import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Column } from '../../components';
import Introduction from '../Introduction';
import Experiences from '../Experiences';
import FeaturedProjects from '../FeaturedProjects';
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

  const { biography, experiences, featuredProjects } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Introduction biography={biography} />
      <Experiences className={styles.padded} experiences={experiences} />
      <FeaturedProjects projects={featuredProjects} />
      <Column className={styles.column} />
    </div>
  );
};

export default Index;
