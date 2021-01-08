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

import { getProjects } from '@utils/serializers';
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
  const projects = getProjects(data.projects);
  const [featured, rest] = partition(projects, ({ featured }) => !!featured);

  const title = 'Archive';
  const description =
    'I’ve worked in the product and agency spaces. Over the years, I’ve had a hand in unique projects and taken multiple meaningful roles.';

  return (
    <Layout>
      <SEO title={title} description={description} />
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
          }
        }
      }
    }
  }
`;
