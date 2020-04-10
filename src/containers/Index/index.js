import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SEO, Column } from '../../components';
import Introduction from '../Introduction';
import Experiences from '../Experiences';
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
            name
            link
            media {
              ...IMAGE
            }
          }
        }
      }
    }
  `);

  const { biography, experiences } = homepage;

  return (
    <div className={styles.index}>
      <SEO title="Developer, Designer, Ballroom Dancer" />
      <Introduction biography={biography} />
      <Experiences className={styles.experiences} experiences={experiences} />
      <Column className={styles.column} />
    </div>
  );
};

export default Index;
