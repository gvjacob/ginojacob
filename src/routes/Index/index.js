import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Hero, Biography } from '../../containers';
import { SEO } from '../../components';

const Index = () => {
  const { homepage } = useStaticQuery(graphql`
    {
      homepage: contentfulHomepage {
        biography {
          name
          tagline
          headline
          biography {
            json
          }
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
      <Biography {...biography} />
    </Fragment>
  );
};

export default Index;
