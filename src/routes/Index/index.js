import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Hero } from '../../containers';
import { SEO } from '../../components';

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
    <Fragment>
      <SEO title={biography.tagline} />
      <Hero {...biography} />
    </Fragment>
  );
};

export default Index;
