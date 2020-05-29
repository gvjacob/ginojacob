import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Hero, Biography, Archive } from '../../containers';
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
    <Fragment>
      <SEO title={biography.tagline} />
      <Hero {...biography} />
      <Biography {...biography} project={featuredProject} />
      <Archive projects={archive} />
    </Fragment>
  );
};

export default Index;
