import React from 'react';
import { graphql } from 'gatsby';
import partition from 'lodash.partition';
import styled from 'styled-components';

import SEO from '@components/SEO';
import Topper from '@components/Topper';
import Categories from '@components/Categories';
import TeaseList from '@components/TeaseList';
import Layout from '@components/Layout';
import FeaturedWork from '@components/FeaturedWork';

import { getProjects, getFrontmatter } from '@utils/serializers';
import { spacing } from '@styles/variables';

const StyledTopper = styled(Topper)`
  width: 50%;
  margin-bottom: ${spacing.small};
  margin-top: ${spacing.medium};
`;

const StyledCategories = styled(Categories)`
  width: 66%;
  margin-bottom: ${spacing.medium};
`;

const StyledTeaseList = styled(TeaseList)`
  width: 50%;
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.large};
`;

const ArchivePage = ({ data }) => {
  const { title, description } = getFrontmatter(data.archive);
  const projects = getProjects(data.projects);
  const [featured, rest] = partition(projects, ({ featured }) => !!featured);

  return (
    <Layout>
      <SEO title={`Gino — ${title}`} description={description} />
      <StyledTopper title={title} description={description} />
      <StyledCategories
        categories={[
          { name: 'Web Design' },
          { name: 'Front-end' },
          { name: 'Backend' },
          { name: 'Creative Direction' },
          { name: 'Branding' },
          { name: 'Logo' },
          { name: 'Open Source' },
          { name: 'Ballroom 💃' },
        ]}
      />
      <FeaturedWork featured={featured} />
      <StyledTeaseList projects={rest} />
    </Layout>
  );
};

export default ArchivePage;

export const query = graphql`
  query ArchiveQuery {
    archive: markdownRemark(fields: { sourceName: { eq: "archive" } }) {
      frontmatter {
        title
        description
      }
    }

    projects: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tease
            description
            cover
            categories
            featured
            case_study_link
            live_link
          }
        }
      }
    }
  }
`;
