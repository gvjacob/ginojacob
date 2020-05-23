import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Hero } from '../../containers';
import { SEO } from '../../components';

import styles from './styles.module.scss';

const Index = () => {
  const { homepage } = useStaticQuery(graphql`
    {
      homepage: contentfulHomepage {
        biography {
          name
          tagline
          avatar {
            ...IMAGE
          }
          experience {
            title
            organization {
              name
              website
            }
          }
        }
      }
    }
  `);

  const { biography } = homepage;

  return (
    <div className={styles.index}>
      <SEO title={biography.tagline} />
      <Hero {...biography} />
    </div>
  );
};

export default Index;
