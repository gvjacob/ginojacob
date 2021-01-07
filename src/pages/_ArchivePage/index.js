import React from 'react';
import partition from 'lodash.partition';

import Layout from '@components/Layout';
import FeaturedWork from '@components/FeaturedWork';

import styled from './styled';

const ArchivePage = ({ data }) => {
  const projects = data.projects.edges.map(({ node }) => node.frontmatter);
  const [featured, rest] = partition(projects, ({ featured }) => !!featured);

  return (
    <Layout>
      <styled.Topper
        title="Archive"
        description="I’ve worked in the product and agency spaces. Over the years, I’ve had a hand in unique projects and taken multiple meaningful roles."
      />
      <styled.Categories
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
      <styled.TeaseList projects={rest} />
    </Layout>
  );
};

export default ArchivePage;
